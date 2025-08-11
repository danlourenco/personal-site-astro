export interface ProjectData {
  role: string;
  impact: string;
  technologies: string;
  note?: string;
}

export interface PositionProjects {
  [position: string]: {
    [client: string]: ProjectData;
  };
}

export const workExperienceProjects: PositionProjects = {
  'Software Architect': {
    'Major American Bank': {
      role: 'Technical Lead & Engineering Manager',
      impact: 'Streamlined financial advisor workflows, reducing approval time and improving client service efficiency',
      technologies: 'AWS Lambda, DynamoDB, Agile/Scrum methodologies'
    },
    'Consulting Firm': {
      role: 'AI Engineer',
      impact: 'Enhanced internal research capabilities by developing AI-powered search and document summarization features',
      technologies: 'React, Redux, RTK Query, React ARIA Components, OpenAI'
    },
    'National Restaurant Chain': {
      role: 'Lead Developer & Performance Architect', 
      impact: 'Delivered 50% page load improvement across hundreds of locations, enhancing customer experience and operational efficiency',
      technologies: 'Nuxt 3, MapLibre, Radar.com, Image optimization'
    },
    'AI Microsite Generator': {
      role: 'Architect',
      impact: 'Built internal Generative AI project for no-code WYSIWYG microsite creation',
      technologies: 'OpenAI Assistants, Whisper, Dalle 3, LangChain, Python, Azure Functions',
      // note: 'basecamp project'
    }
  },
  'Senior Software Engineer': {
    'Fortune 500 Financial Services Firm': {
      role: 'Frontend Team Lead & Mentor',
      impact: 'Improved development team productivity and code quality through mentorship and standardized practices',
      technologies: 'React, Snowplow, CLI tools, Testing frameworks'
    },
    'Federal Agency': {
      role: 'Accessibility-focused Frontend Developer',
      impact: 'Enabled faster benefits processing for millions of citizens through accessible, compliant UI components', 
      technologies: 'Micro-frontends, Federal accessibility standards, Case verification systems'
    }
  },
  'Consultant': {
    'Global Athletic Apparel Company': {
      role: 'Founding Frontend Engineer & Platform Architect',
      impact: 'Launched successful e-commerce platform generating $300K+ revenue in initial campaigns',
      technologies: 'JavaScript, E-commerce integration, Campaign management systems'
    }
  }
};