import { Projects, socialAndCV } from '../../../data/data'
import { type Project } from '../../../interfaces/data'
import Card from '../../pure/Card'

const Presentation: React.FC = () => {
  return (
    <article className='flex flex-col items-center justify-center xl:w-1/2 max-xl:text-center'>
      <div className='mb-10'>
        <h1 className='max-xl:text-5xl xl:text-6xl flex flex-col mb-5 gap-3'>
          <span>¡Hola!</span>{' '}
          <span>
            Soy{' '}
            <span id='name' className='text-details'>
              Santino Stimoli
            </span>
          </span>
        </h1>
        <h2 id='typing' className='text-3xl mb-3 max-xl:mx-auto tracking-tighter'>
          Front End Developer
        </h2>
        <div className='flex gap-2 max-xl:justify-center max-xl:gap-5'>
          {socialAndCV.map((e, i) => {
            return (
              <a key={i} href={e.link} target='_blank' rel='noreferrer'>
                <i
                  className={'bx-sm hover:scale-[1.4] hover:text-details transition-all ' + e.code}
                />
              </a>
            )
          })}
        </div>
      </div>
      <section className='flex flex-col'>
        <h2 className='text-xl mb-5'>Ultimos proyectos</h2>
        <div className='flex flex-wrap justify-around gap-5'>
          {Projects.slice(0, 2).map((e: Project, i: number) => {
            return <Card key={i} project={e} small />
          })}
        </div>
      </section>
    </article>
  )
}

export default Presentation
