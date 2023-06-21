import { NavLink } from 'react-router-dom'
import navFormater from '../../services/navFormater'

const NavElement = ({ to }: { to: string }) => {
    return (<NavLink className='px-3 py-2 my-0.5 rounded hover:bg-white hover:bg-opacity-30' to={navFormater(to)}>{to}</NavLink>)
}

export default NavElement