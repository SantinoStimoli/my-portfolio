import { NavLink } from 'react-router-dom'
import navFormater from '../../services/navFormater'
import { useRef } from 'react'

interface Props {
    to: string
    setProps: ({ left, top, width, height }: Position) => void;
    hideBox: () => void
}

const NavElement = ({ to, setProps, hideBox }: Props) => {

    const element = useRef(null)

    function getProps() {
        const { left, top, width, height }: Position = element.current?.getBoundingClientRect()
        setProps({ left: left, top: top, width: width, height: height });
    }

    return (<NavLink ref={element} onMouseEnter={() => getProps()} onMouseLeave={() => hideBox()} className='px-3 py-2 my-0.5 rounded z-10' to={navFormater(to)}>{to}</NavLink>)
}

export default NavElement