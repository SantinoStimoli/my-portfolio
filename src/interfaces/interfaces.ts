interface Technology {
  name: string
  icon: string
}

interface Field {
  name: string
  technologies: Technology[]
}

interface ContactWay {
  link: string
  icon: string
}

interface Experience {
  title: string
  company: string
  range: string
  description: string
  technologies: Technology[]
}

interface Project {
  title: string
  company: string
  img: any
  description: string
  codeLink?: string
  pageLink: string
  technologies: string[]
}
