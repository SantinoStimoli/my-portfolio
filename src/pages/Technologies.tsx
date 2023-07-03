import Stack from '../components/pure/Stack'
import { DTechnologies } from '../data/data'

const Technologies: React.FC = () => {
  return (
    <article id='tecnologías' className='page-section container flex-col'>
      <h2 className='title'>Tecnologías y aplicaciones</h2>
      <section className='flex flex-wrap justify-center gap-20'>
        {DTechnologies.map((e, i) => {
          return <Stack key={i} stack={e} />
        })}
      </section>
    </article>
  )
}

export default Technologies
