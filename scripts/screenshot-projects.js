#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import projects config
async function getProjects() {
  const configPath = path.join(__dirname, '../src/config/projects.ts');
  const configContent = await fs.readFile(configPath, 'utf-8');
  
  // Simple regex to extract project objects (works for our specific format)
  const projectMatches = configContent.match(/{\s*id:\s*'([^']+)'[\s\S]*?href:\s*'([^']+)'[\s\S]*?linkType:\s*'([^']+)'[\s\S]*?}/g);
  
  if (!projectMatches) return [];
  
  return projectMatches.map(match => {
    const id = match.match(/id:\s*'([^']+)'/)?.[1];
    const href = match.match(/href:\s*'([^']+)'/)?.[1];
    const linkType = match.match(/linkType:\s*'([^']+)'/)?.[1];
    
    return { id, href, linkType };
  }).filter(p => p.href && p.href !== '#' && p.linkType === 'website');
}

async function takeScreenshot(project) {
  console.log(`📸 Taking screenshot of ${project.id}: ${project.href}`);
  
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent screenshots
    await page.setViewportSize({
      width: 1200,
      height: 800
    });

    // Set user agent to avoid bot detection
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    // Navigate to the page
    await page.goto(project.href, {
      waitUntil: 'networkidle', // Wait until no network activity
      timeout: 30000
    });

    // Wait a bit more for any animations or lazy loading
    await page.waitForTimeout(2000);

    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, '../src/images/projects');
    await fs.mkdir(screenshotsDir, { recursive: true });

    // Take screenshot
    const screenshotPath = path.join(screenshotsDir, `${project.id}.jpg`);
    await page.screenshot({
      path: screenshotPath,
      type: 'jpeg',
      quality: 85,
      fullPage: false // Just the above-the-fold content
    });

    console.log(`✅ Screenshot saved: ${screenshotPath}`);
    return screenshotPath;

  } catch (error) {
    console.error(`❌ Error taking screenshot of ${project.id}:`, error.message);
    return null;
  } finally {
    await browser.close();
  }
}

async function updateProjectConfig(projectId, screenshotPath) {
  const configPath = path.join(__dirname, '../src/config/projects.ts');
  let configContent = await fs.readFile(configPath, 'utf-8');
  
  // Find the project and add screenshot path if it doesn't exist
  const relativePath = `../images/projects/${projectId}.jpg`;
  
  // Look for the project by id and see if it already has a screenshot
  const projectRegex = new RegExp(
    `({\\s*id:\\s*'${projectId}'[\\s\\S]*?linkType:\\s*'[^']+')([\\s\\S]*?)}`,
    'g'
  );
  
  const match = projectRegex.exec(configContent);
  if (match) {
    const [fullMatch, beforeScreenshot, afterLinkType] = match;
    
    // Check if screenshot already exists
    if (!afterLinkType.includes('screenshot:')) {
      const updatedProject = `${beforeScreenshot},\n    screenshot: '${relativePath}'${afterLinkType}}`;
      configContent = configContent.replace(fullMatch, updatedProject);
      
      await fs.writeFile(configPath, configContent);
      console.log(`📝 Updated config for ${projectId} with screenshot path`);
    }
  }
}

async function main() {
  console.log('🚀 Starting automated project screenshot generation...\n');
  
  try {
    const projects = await getProjects();
    
    if (projects.length === 0) {
      console.log('No website projects found to screenshot.');
      return;
    }

    console.log(`Found ${projects.length} website project(s) to screenshot:\n`);
    projects.forEach(p => console.log(`  • ${p.id}: ${p.href}`));
    console.log('');

    // Take screenshots sequentially to avoid overwhelming the system
    for (const project of projects) {
      const screenshotPath = await takeScreenshot(project);
      
      if (screenshotPath) {
        await updateProjectConfig(project.id, screenshotPath);
      }
      
      // Small delay between screenshots to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('\n✨ Screenshot generation complete!');
    
  } catch (error) {
    console.error('❌ Error running screenshot script:', error);
    process.exit(1);
  }
}

// Run the script
main();