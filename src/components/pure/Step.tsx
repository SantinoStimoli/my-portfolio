import Graduated from '../../assets/svg/Graduated'
import { type Study } from '../../interfaces/data'

const Step: React.FC<{ number: number; study: Study }> = ({
  number,
  study,
}: {
  number: number
  study: Study
}) => {
  return (
    <div className='flex relative py-5 sm:items-center md:w-2/3 mx-auto'>
      <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
        <div className='h-full w-1 bg-text pointer-events-none'></div>
      </div>
      <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-alternative_bg text-details relative z-10 title-font font-medium text-sm'>
        {number}
      </div>
      <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
        <div className='flex-shrink-0 w-24 h-24 bg-alternative_bg text-details rounded-full inline-flex items-center justify-center'>
          <Graduated />
        </div>
        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
          <div className='leading-3 mb-3'>
            <h2 className='font-bold title-font text-text mb-1 text-xl'>{study.title}</h2>
            <div className='flex gap-3 items-center'>
              <h3 className='font-semibold text-opacity-75'>{study.company}</h3>
              <span className='font-medium text-xs text-opacity-75'>
                ({study.from}-{study.to})
              </span>
            </div>
          </div>
          <p className='leading-relaxed text-text/70'>{study.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Step
