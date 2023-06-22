import Card from "../../pure/Card"

const Presentation = () => {
  return (
    <article className='flex flex-col items-center justify-center w-1/2'>
      <div className="mb-10">
        <h1 className='text-6xl flex flex-col mb-5'><span>¡Hola!</span> Soy Santino Stimoli</h1>
        <h2 id='typing' className='text-3xl'>Desarrollador Front End</h2>
      </div>
      <section className="flex flex-col">
        <h2 className="text-xl mb-3">Ultimos proyectos</h2>
        <div className="flex justify-around gap-5">
          <Card />
          <Card />
        </div>
      </section>
    </article>
  )
}

export default Presentation