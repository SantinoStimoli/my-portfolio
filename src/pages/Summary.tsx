import Image from '../components/body/presentation/Image'
import Presentation from '../components/body/presentation/Presentation'

const Summary: React.FC = () => {
  return (
    <section className='flex max-xl:flex-col mb-10'>
      <Image />
      <Presentation />
    </section>
  )
}

export default Summary
