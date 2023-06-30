import Card from '../components/pure/Card'
import { Projects } from '../data/data'

const MyProjects: React.FC = () => {
  return (
    <article id='proyectos' className='page-section container flex-col'>
      <h1 className='title'>Mis proyectos</h1>
      <section className='flex gap-3 flex-wrap justify-center items-center'>
        {Projects.map((e, i) => {
          return <Card key={i} project={e} />
        })}
      </section>
    </article>
  )
}

export default MyProjects
