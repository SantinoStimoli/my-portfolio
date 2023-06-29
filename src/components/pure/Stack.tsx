import { type IStack } from '../../interfaces/data'
import FrontEnd from '../../assets/svg/FrontEnd'
import BackEnd from '../../assets/svg/BackEnd'
import Design from '../../assets/svg/Design'

const Stack = ({ title, technologies }: IStack) => {
  return (
        <section className='max-w-[300px] flex flex-col items-center text-center'>
            {title === 'FrontEnd' && <FrontEnd size={150} />}
            {title === 'BackEnd' && <BackEnd size={150} />}
            {title === 'Diseño' && <Design size={150} />}
            <h1 className='uppercase text-2xl font-bold mb-3'>{title}</h1>
            <div className='flex flex-wrap items-center justify-center gap-1'>
                {technologies.map((e, i) => {
                  return (<span className='px-1 bg-secondary_bg rounded flex items-center gap-1' key={i}> <i className={e.code + ' pt-0.5'} /> {e.name}</span>)
                })}
            </div>
        </section>
  )
}

export default Stack
