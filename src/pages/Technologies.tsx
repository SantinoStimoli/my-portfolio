import Stack from "../components/pure/Stack"
import { DTechnologies } from "../data/data"

const Technologies = () => {
    return (
        <article>
            <h1 className="text-4xl uppercase text-center font-bold mb-10">Tecnologias y aplicaciones</h1>
            <section className="flex flex-wrap justify-center gap-20 mb-20">
                {DTechnologies.map((e, i) => {
                    return (<Stack key={i} title={e.title} technologies={e.technologies} />)
                })}
            </section>
        </article>
    )
}

export default Technologies