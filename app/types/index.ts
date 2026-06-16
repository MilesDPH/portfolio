export interface Project {
  id: string
  title: string
  category: string
  problem: string
  solution: string
  result?: string
  technologies: string[]
  featured: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  highlights: string[]
  icon: string
}

export interface TechGroup {
  category: string
  items: string[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactLink {
  label: string
  href: string
  icon: string
  external?: boolean
}
