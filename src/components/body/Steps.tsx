import { studies } from '../../data/data'
import Step from '../pure/Step'

const Steps: React.FC = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto flex flex-wrap'>
        {studies.map((e, i) => {
          return <Step key={i} number={i + 1} study={e} />
        })}
      </div>
    </section>
  )
}

export default Steps
