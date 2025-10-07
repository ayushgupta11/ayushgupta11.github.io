export interface ContactInfo {
  name: string
  title: string
  email: string
  phone: string
  address: string
  website?: string
  linkedin?: string
  github?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string[]
  location?: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  year: string
  image?: string
  link?: string
  status?: string
}

export interface Education {
  institution: string
  degree: string
  duration: string
  location?: string
  details?: string[]
}

export interface ResumeData {
  contactInfo: ContactInfo
  philosophy?: string
  skills: Skill[]
  experience: Experience[]
  projects: Project[]
  education?: Education[]
}
