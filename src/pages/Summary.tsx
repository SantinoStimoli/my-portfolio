import Image from '../components/body/presentation/Image'
import Presentation from '../components/body/presentation/Presentation'

const Summary: React.FC = () => {
  return (
    <article id='inicio' className='flex max-xl:flex-col page-section'>
      <Image />
      <Presentation />
    </article>
  )
}

export default Summary
