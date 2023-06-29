import TATETI from '../assets/Ta-Te-Ti.png'
import VALIDATION_SOFTWARE from '../assets/Validation-Software.png'
import TECNICORT from '../assets/Tecnicort.png'
import { type IStack, type Project } from '../interfaces/data'

export const Projects: Project[] = [
  { img: TATETI, link: 'https://santino-stimoli.github.io/Ta-Te-Ti/', repo: 'https://github.com/santino-stimoli/Ta-Te-Ti', title: 'Ta Te Ti' },
  { img: TECNICORT, link: 'https://santino-stimoli.github.io/Tecnicort/', repo: 'https://github.com/santino-stimoli/Tecnicort', title: 'Generador facturas' },
  { img: VALIDATION_SOFTWARE, link: 'https://github.com/santino-stimoli/validation-software', repo: 'https://santino-stimoli.github.io/validation-software/', title: 'Test + detección facial' }
]

export const DTechnologies: IStack[] = [
  { title: 'FrontEnd', technologies: [{ name: 'HTML', code: 'bx bxl-html5' }, { name: 'CSS', code: 'bx bxl-css3' }, { name: 'Tailwind', code: 'bx bxl-tailwind-css' }, { name: 'Bootstrap', code: 'bx bxl-bootstrap' }, { name: 'JavaScript', code: 'bx bxl-javascript' }, { name: 'TypeScript', code: 'bx bxl-typescript' }, { name: 'React', code: 'bx bxl-react' }, { name: 'Angular', code: 'bx bxl-angular' }, { name: 'Vue', code: 'bx bxl-vuejs' }] },
  { title: 'BackEnd', technologies: [{ name: 'JAVA', code: 'bx bxl-java' }, { name: 'Spring', code: 'bx bxl-spring-boot' }] },
  { title: 'Diseño', technologies: [{ name: 'Illustrator', code: 'bx bxl-adobe' }, { name: 'Photoshop', code: 'bx bxl-adobe' }, { name: 'Premiere', code: 'bx bxl-adobe' }] }
]
