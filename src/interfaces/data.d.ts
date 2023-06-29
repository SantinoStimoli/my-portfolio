export interface Project {
  img: string
  repo: string
  link: string
  title: string
}

interface Technologies {
  name: string
  code: string
}

export interface IStack {
  title: string
  technologies: Technologies[]
}
