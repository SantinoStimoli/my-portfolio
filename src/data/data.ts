import TATETI from '../assets/Ta-Te-Ti.png'
import VALIDATION_SOFTWARE from '../assets/Validation-Software.png'
import TECNICORT from '../assets/Tecnicort.png'
import { type Study, type IStack, type Project } from '../interfaces/data'

export const Projects: Project[] = [
  {
    img: TATETI,
    link: 'https://santino-stimoli.github.io/Ta-Te-Ti/',
    repo: 'https://github.com/santino-stimoli/Ta-Te-Ti',
    title: 'Ta Te Ti',
  },
  {
    img: TECNICORT,
    link: 'https://santino-stimoli.github.io/Tecnicort/',
    repo: 'https://github.com/santino-stimoli/Tecnicort',
    title: 'Generador facturas',
  },
  {
    img: VALIDATION_SOFTWARE,
    link: 'https://github.com/santino-stimoli/validation-software',
    repo: 'https://santino-stimoli.github.io/validation-software/',
    title: 'Test + detección facial',
  },
]

export const DTechnologies: IStack[] = [
  {
    title: 'FrontEnd',
    technologies: [
      { name: 'HTML', code: 'bx bxl-html5' },
      { name: 'CSS', code: 'bx bxl-css3' },
      { name: 'Tailwind', code: 'bx bxl-tailwind-css' },
      { name: 'Bootstrap', code: 'bx bxl-bootstrap' },
      { name: 'JavaScript', code: 'bx bxl-javascript' },
      { name: 'TypeScript', code: 'bx bxl-typescript' },
      { name: 'React', code: 'bx bxl-react' },
      { name: 'Angular', code: 'bx bxl-angular' },
      { name: 'Vue', code: 'bx bxl-vuejs' },
    ],
  },
  {
    title: 'BackEnd',
    technologies: [
      { name: 'JAVA', code: 'bx bxl-java' },
      { name: 'Spring', code: 'bx bxl-spring-boot' },
    ],
  },
  {
    title: 'Diseño',
    technologies: [
      { name: 'Illustrator', code: 'bx bxl-adobe' },
      { name: 'Photoshop', code: 'bx bxl-adobe' },
      { name: 'Premiere', code: 'bx bxl-adobe' },
    ],
  },
]

export const studies: Study[] = [
  {
    title: 'Full Stack JAVA Developer',
    description:
      'Durante ese periodo tuve la oportunidad de aprender trabajando en lo relacionado al desarrollo de páginas web, durante 4 meses y mas de 700 horas de intenso estudio logre aprender mediante metodologías ágiles de Scrum lo necesario para ser un desarrollador Web Full Stack Java.',
    company: 'Mindhub LA',
    from: '05-2022',
    to: '10-2022',
    technologies: [
      { name: 'HTML', code: 'bx bxl-html5' },
      { name: 'CSS', code: 'bx bxl-css3' },
      { name: 'Tailwind', code: 'bx bxl-tailwind-css' },
      { name: 'Bootstrap', code: 'bx bxl-bootstrap' },
      { name: 'JavaScript', code: 'bx bxl-javascript' },
      { name: 'Vue', code: 'bx bxl-vuejs' },
      { name: 'JAVA', code: 'bx bxl-java' },
      { name: 'Spring', code: 'bx bxl-spring-boot' },
    ],
    time: 5,
  },
  {
    title: 'React Developer',
    description:
      'Durante dos meses, decidí embarcarme en el estudio de React, atraído por la posibilidad de componentizar mi proyecto. En este curso, adquirí conocimientos en herramientas como Formik, Yup y React Router. Aprendí a gestionar el estado de la aplicación utilizando Hooks y a realizar peticiones a través de Axios y Fetch. Además, logré darle estilo a mi proyecto utilizando la potencia de Tailwind CSS. Este período de aprendizaje me permitió ampliar mis habilidades y me sirvio para aplicar lo aprendido en otros proyectos.',
    company: 'OpenBootcamp',
    from: '10-2022',
    to: '01-2023',
    technologies: [
      { name: 'HTML', code: 'bx bxl-html5' },
      { name: 'CSS', code: 'bx bxl-css3' },
      { name: 'Tailwind', code: 'bx bxl-tailwind-css' },
      { name: 'JavaScript', code: 'bx bxl-javascript' },
      { name: 'React', code: 'bx bxl-react' },
    ],
    time: 2,
  },
  {
    title: 'TypeScript Developer',
    description:
      'Durante dos meses, me enfoqué en aprender TypeScript, motivado por la posibilidad de combinarlo con React y crear proyectos más poderosos. Durante este tiempo, adquirí habilidades para manejar tipos de datos, crear interfaces y utilizar todas las herramientas necesarias para desarrollar aplicaciones con TypeScript. Esta experiencia me ha permitido escribir un código más estricto y legible, brindando mayor confiabilidad y escalabilidad a mis proyectos. Estoy entusiasmado por seguir explorando las posibilidades que ofrece esta combinación de tecnologías en futuros desafíos.',
    company: 'OpenBootcamp',
    from: '01-2023',
    to: '02-2023',
    technologies: [
      { name: 'HTML', code: 'bx bxl-html5' },
      { name: 'CSS', code: 'bx bxl-css3' },
      { name: 'Tailwind', code: 'bx bxl-tailwind-css' },
      { name: 'TypeScript', code: 'bx bxl-typescript' },
      { name: 'React', code: 'bx bxl-react' },
    ],
    time: 2,
  },
]
