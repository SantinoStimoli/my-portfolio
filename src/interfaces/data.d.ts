export interface Project {
  img: string
  repo: string
  link: string
  title: string
}

export interface Technologies {
  name: string
  code: string
}

export interface IStack {
  title: string
  technologies: Technologies[]
}
export interface Study {
  title: string
  description: string
  company: string
  time: number
  from: string
  to: string
  technologies: Technologies[]
}

export interface SVG {
  size?: number
}
