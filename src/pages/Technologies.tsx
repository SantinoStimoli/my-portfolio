import Stack from '../components/pure/Stack'
import { DTechnologies } from '../data/data'

const Technologies: React.FC = () => {
  return (
    <article id='tecnologías' className='page-section flex-col'>
      <h1 className='text-4xl uppercase text-center font-bold mb-10'>Tecnologías y aplicaciones</h1>
      <section className='flex flex-wrap justify-center gap-20'>
        {DTechnologies.map((e, i) => {
          return <Stack key={i} title={e.title} technologies={e.technologies} />
        })}
      </section>
    </article>
  )
}

export default Technologies
