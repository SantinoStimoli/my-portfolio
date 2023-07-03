import { socialNetworks } from '../../data/data'
import SocialElement from '../pure/SocialElement'

const Social: React.FC = () => {
  return (
    <section className='lg:grid grid-rows-2 grid-cols-2 gap-10 max-lg:flex flex-col'>
      {socialNetworks.map((e, i) => {
        return <SocialElement key={i} socialNetwork={e} />
      })}
    </section>
  )
}

export default Social
