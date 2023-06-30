import SectionAbout from '../components/pure/SectionAbout'

const AboutMe: React.FC = () => (
  <article id='sobre-mi' className='page-section container flex-col gap-10 xs:px-10 max-xs:px-3'>
    <section className='mb-5'>
      <h1 className='title'>Sobre mi</h1>
      <p className='text-center lg:px-5 xl:px-20'>
        Soy una persona con una excelente capacidad de comunicación, tanto verbal como escrita, lo
        que me permite expresarme de manera clara y efectiva. Soy un buen colaborador y tengo
        habilidades sólidas para trabajar en equipo, lo que me permite contribuir positivamente y
        lograr resultados en conjunto. Además, poseo una gran capacidad de adaptación y resolución
        de problemas, lo que me permite enfrentar desafíos de manera creativa y encontrar soluciones
        efectivas. Soy una persona organizada, con habilidades de gestión del tiempo y la capacidad
        de priorizar tareas para cumplir con los plazos. Por último, tengo una mentalidad abierta y
        una actitud positiva, lo que me permite enfrentar nuevos desafíos con entusiasmo y aprender
        constantemente.
      </p>
    </section>
    <SectionAbout
      right
      title='Rubro IT'
      content='Hace 2 años, me adentré en el mundo de la tecnología. Aprendí HTML, CSS y JavaScript, y me especialicé en React, Angular y Vue. Ahora, con 2 años de experiencia en desarrollo front-end, estoy emocionado por seguir creciendo en este campo y contribuir con soluciones innovadoras.'
    />
    <SectionAbout
      title='Vida personal'
      content='Soy practicante de Taekwondo desde los 6 años, actualmente ostento el grado de 3er Dan. Durante estos años de dedicación y esfuerzo, he adquirido valiosos valores que han moldeado mi personalidad, tales como el respeto, la perseverancia y la cortesía. Mi objetivo a largo plazo es convertirme en instructor de Taekwondo y veo en la programación una excelente forma de combinar mis pasiones. Creo firmemente que la disciplina y la mentalidad enfocada que he desarrollado en el Taekwondo se pueden aplicar en el mundo de la programación, y me entusiasma la idea de transmitir mis conocimientos y valores a las generaciones futuras.'
    />
  </article>
)

export default AboutMe
