import type { ResumeData } from '../types/resume'

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
      title: 'Charlie - GenAI Platform',
      description:
        'Scalable GenAI platform for Pfizer supporting 50K+ users with AI-generated marketing content across multiple channels.',
      technologies: [
        'React.js',
        'Node.js',
        'GraphQL',
        'AWS Bedrock',
        'Claude',
        'TypeScript',
      ],
      year: '2024',
      status: 'Production',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy',
    },
    {
      title: 'Kaiser Permanente Health Ecosystem',
      description:
        'Digital health platform serving 10M+ users across all 50 US states with check-in, payment, and telehealth capabilities.',
      technologies: ['Angular 11', 'Node.js', 'AEM', 'AWS', 'Microservices'],
      year: '2022-2024',
      status: 'Production',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=entropy',
    },
    {
      title: 'Dow Jones Subscription Platform',
      description:
        'Cloud-native subscription and newsletter platform for WSJ, Factiva, and PEN with serverless architecture.',
      technologies: ['React.js', 'Next.js', 'AWS Lambda', 'GraphQL', 'MongoDB'],
      year: '2021-2022',
      status: 'Production',
      image:
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&crop=entropy',
    },
    {
      title: 'Self-Service BI Platform',
      description:
        'Business intelligence platform enabling users to create datasets, models, and dashboards with real-time synchronization.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'WebSockets', 'Vue.js'],
      year: '2018-2020',
      status: 'Production',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy',
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
