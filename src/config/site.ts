export const siteConfig = {
  name: "Dan Lourenço",
  title: "Dan Lourenço - Software engineer, writer, and digital craftsman", 
  description: "I'm Dan Lourenço, a software engineer passionate about building meaningful digital experiences. I write about technology, share insights from my development journey, and explore the intersection of code and creativity.",
  url: "https://www.danlouren.co",
  author: {
    name: "Dan Lourenço",
    email: "dan@danlouren.co",
    twitter: "@danlouren",
    github: "danlouren"
  },
  ogImage: "/og-image.jpg",
} as const;

// Helper function for page titles
export function getPageTitle(pageTitle?: string): string {
  return pageTitle === siteConfig.title 
    ? siteConfig.title 
    : `${pageTitle} - ${siteConfig.name}`;
}