import type { ResumeData } from '../types/resume'
import aguiProtocolImg from '../assets/ag-ui-protocol.jpeg'
import nodejsImg from '../assets/nodejs.jpeg'
import mediumBlogImg from '../assets/medium-blog.png'

export const resumeData: ResumeData = {
  contactInfo: {
    name: 'Ayush Gupta',
    title: 'Full-stack Application Architect',
    email: 'ayush.gupta.1197@gmail.com',
    phone: '+91-810-950-1628',
    address: 'Pune, India',
    website: 'ayushgupta11.github.io',
    linkedin: 'linkedin.com/in/ayushgupta1197',
    github: 'github.com/ayushgupta11',
  },
  philosophy:
    "I architect digital ecosystems that transform industries. With 7+ years of full-stack expertise, I've engineered GenAI platforms serving 50K+ concurrent users, scaled healthcare systems across all 50 US states reaching 10M+ patients, and built cloud-native solutions that reduced infrastructure costs by 150%. My passion lies in creating scalable, intelligent systems that bridge cutting-edge technology with real-world impact—from AI-powered marketing platforms for Fortune 500 pharma companies to mission-critical healthcare applications that enhance patient care. I believe in code that not only performs flawlessly but tells a story of innovation, efficiency, and human-centered design.",
  skills: [
    {
      category: 'Primary Technologies',
      items: [
        'MERN Stack',
        'Microservices',
        'Micro-frontends',
        'React.js',
        'Node.js',
        'Next.js',
        'Nest.js',
        'Vue.js',
        'Angular 11',
        'JavaScript',
        'HTML5',
        'CSS/SASS',
        'GraphQL',
        'Tailwind CSS',
        'AWS',
        'Generative AI',
      ],
    },
    {
      category: 'Proficient',
      items: [
        'TypeScript',
        'React Native',
        'Docker',
        'MongoDB',
        'MySQL',
        'Redis',
      ],
    },
    {
      category: 'Familiar',
      items: [
        'Azure',
        'Kubernetes',
        'Firebase',
        'C/C++',
        'Java',
        'GIT',
        'NGINX',
      ],
    },
  ],
  experience: [
    {
      company: 'Publicis Sapient',
      position: 'Lead Experience Engineer',
      duration: 'Apr 2024 - Present',
      description: [
        'Architecting Charlie, a scalable GenAI platform for Pfizer, supporting 50K+ concurrent users and empowering pharma marketers with AI-generated content',
        'Designed robust micro-frontend architecture using React.js, enabling dynamic CMS-driven content delivery across Pfizer markets',
        'Developed modular backend services using Node.js, GraphQL, and TypeScript with microservice principles',
        'Integrated AWS Bedrock, Claude Sonnet & Opus, and Vox translation services for multilingual marketing content',
        'Built CoLab platform with Adobe Workfront integration for streamlined project workflows',
        'Delivered personalized, real-time dashboards with GenAI-powered insights',
      ],
      location: 'Pune, India',
    },
    {
      company: 'Deloitte USI',
      position: 'Consultant',
      duration: 'Jan 2022 - Apr 2024',
      description: [
        "Led multiple modules for Kaiser Permanente's digital health ecosystem, developing check-in, payment, and e-visits modules",
        'Scaled core application from 8 to all 50 states, managing geo-specific features and state regulations',
        'Migrated legacy AngularJS to Angular 11 with AEM-based CMS integration using micro-frontends',
        'Engineered backend services using Node.js and REST APIs for healthcare data integration',
        'Enabled secure video and phone consultation capabilities with HIPAA-compliant communication',
        'Improved performance using server-side rendering and implemented security through Nexus IQ scans',
      ],
      location: 'Pune, India',
    },
    {
      company: 'Infosys Ltd.',
      position: 'Specialist Programmer',
      duration: 'Dec 2020 - Jan 2022',
      description: [
        'Led full-stack development of subscription platform for Dow Jones brands (WSJ, Factiva, PEN)',
        'Architected cloud-native, serverless system using AWS Lambda and Next.js, reducing infrastructure cost by 150%',
        'Implemented modular micro-frontends with module federation for isolated builds and deployments',
        'Integrated real-time content sources like Factiva, NewsPlus, and Allesseh for curated content feeds',
        'Created Slack, email, and Teams integrations for automated newsletter delivery',
        'Designed monorepo-based CI pipelines for streamlined releases',
      ],
      location: 'Pune, India',
    },
    {
      company: 'Netlink Software Pvt. Ltd.',
      position: 'Software Engineer',
      duration: 'June 2018 - Dec 2020',
      description: [
        'Led migration of 8+ legacy Polymer apps to React.js with modular micro-frontend architecture',
        'Designed Node.js + MongoDB APIs for self-service BI platform with schema-level transformations',
        'Created real-time event bus using WebSockets for micro-frontend communication',
        'Developed hybrid mobile app using Vue.js and Cordova with Firebase integration',
        'Contributed to cloud migration strategy with Express Gateway and modular deployments',
      ],
      location: 'Bhopal, India',
    },
  ],
  projects: [
    {
      title: 'agui-hooks',
      description:
        'Production-ready React wrapper for the AG-UI (Agent-GUI) protocol — streaming AI agent state to frontends via SSE. Handles lifecycle events, streaming text tokens, tool calls, and arbitrary state patches in real time.',
      technologies: ['React', 'TypeScript', 'AG-UI Protocol', 'SSE', 'npm'],
      year: '2025',
      status: 'npm package',
      link: 'https://www.npmjs.com/package/agui-hooks',
      image: aguiProtocolImg,
    },
    {
      title:
        'Building Real-Time AI Agent UIs with the AG-UI Protocol and agui-hooks',
      description:
        'How we went from disconnected chatboxes to a fully event-driven AI frontend ecosystem. A deep dive into the AG-UI protocol and how agui-hooks bridges AI agents with React frontends.',
      technologies: ['AG-UI Protocol', 'React', 'SSE', 'AI Agents'],
      year: '2025',
      status: 'blog',
      link: 'https://medium.com/@ayush.gupta.1197/building-real-time-ai-agent-uis-with-the-ag-ui-protocol-and-agui-hooks-14a78a8f7002',
      image: mediumBlogImg,
    },
    {
      title: 'node-server-gen',
      description:
        'A npm module based on Node.js for creating a server for your projects. Similar to create-react-app, it provides basic CLI functionality for bootstrapping Node.js projects with a boilerplate template along with ES6 syntax support.',
      technologies: ['Node.js', 'CLI', 'ES6', 'npm'],
      year: '2021',
      status: 'npm package',
      link: 'https://www.npmjs.com/package/node-server-gen',
      image: nodejsImg,
    },
  ],
  education: [
    {
      institution: 'University Institute of Technology, RGPV',
      degree: 'B.E. in Computer Science',
      duration: '2015-2019',
      location: 'Madhya Pradesh, India',
      details: ['CGPA: 8.01/10.0'],
    },
    {
      institution: 'Mount Carmel School',
      degree: 'Senior Secondary Education',
      duration: '2015',
      location: 'Madhya Pradesh, India',
      details: ['Percentage: 88.4%'],
    },
  ],
}
