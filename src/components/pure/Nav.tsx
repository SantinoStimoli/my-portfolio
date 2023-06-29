import { useEffect, useRef, useState } from 'react'
import NavElement from './NavElement'
import { type Position } from '../../interfaces/functionProps'

const Nav: React.FC<{ navList: string[] }> = ({ navList }: { navList: string[] }) => {
  const [props, setProps] = useState<Position>({
    left: '0px',
    height: '0px',
    top: '0px',
    width: '0px',
  })

  const hoverElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    moveBox()
  }, [props])

  function hideBox(): void {
    if (hoverElement.current !== null) hoverElement.current.style.opacity = '0'
  }

  function moveBox(): void {
    if (hoverElement.current !== null) {
      hoverElement.current.style.opacity = '1'
      hoverElement.current.style.left = props !== undefined ? props.left + 'px' : ''
      hoverElement.current.style.top = props !== undefined ? props.top + 'px' : ''
      hoverElement.current.style.width = props !== undefined ? props.width + 'px' : ''
      hoverElement.current.style.height = props !== undefined ? props.height + 'px' : ''
    }
  }

  return (
    <ul className='flex justify-center text-white'>
      <div ref={hoverElement} className='hover-box' />
      {navList.map((navLink: string, i: number) => {
        return <NavElement key={i} to={navLink} setProps={setProps} hideBox={hideBox} />
      })}
    </ul>
  )
}

export default Nav
