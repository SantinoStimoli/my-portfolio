import { NavLink } from 'react-router-dom'
import navFormater from '../../services/navFormater'

const NavElement = ({ to }: { to: string }) => {
    return (<NavLink className='px-3 py-2' to={navFormater(to)}>{to}</NavLink>)
}

export default NavElement