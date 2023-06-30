import { NavLinks } from '../../data/data'
import Logo from '../pure/Logo'
import Nav from '../pure/Nav'
import Options from '../pure/Options'

const Header: React.FC = () => {
  return (
    <header className='bg-alternative_bg flex justify-between w-full py-3 pr-3 fixed z-50 top-0 bg-opacity-100'>
      <Logo />
      <Nav navList={NavLinks} />
      <Options />
    </header>
  )
}

export default Header
