import { Projects } from "../../../data/info"
import { Project } from "../../../interfaces/functionProps"
import Card from "../../pure/Card"

const Presentation = () => {
  return (
    <article className='flex flex-col items-center justify-center w-1/2'>
      <div className="mb-10">
        <h1 className='text-6xl flex flex-col mb-5 gap-3'><span>¡Hola!</span> <span>Soy <span id="name" className="text-details" >Santino Stimoli</span></span></h1>
        <h2 id='typing' className='text-3xl' >Desarrollador Front End</h2>
      </div>
      <section className="flex flex-col">
        <h2 className="text-xl mb-5">Ultimos proyectos</h2>
        <div className="flex justify-around gap-5">
          {Projects.slice(0, 2).map((e: Project, i: number) => {
            return (
              <Card key={i} img={e.img} link={e.link} repo={e.repo} title={e.title} />
            )
          })}
        </div>
      </section>
    </article>
  )
}

export default Presentation