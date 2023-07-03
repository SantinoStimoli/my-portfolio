/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useRef, useState } from 'react'
import NavElement from './NavElement'
import { type Position } from '../../interfaces/functionProps'

const Nav: React.FC<{ navList: string[] }> = ({ navList }: { navList: string[] }) => {
  const [positionProps, setPositionProps] = useState<Position>()

  const hoverElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    moveBox()
  }, [positionProps])

  function hideBox(): void {
    if (hoverElement.current !== null) hoverElement.current.style.opacity = '0'
  }

  function moveBox(): void {
    if (hoverElement.current !== null) {
      hoverElement.current.style.opacity = '1'
      hoverElement.current.style.left = positionProps !== undefined ? positionProps.left + 'px' : ''
      hoverElement.current.style.top = positionProps !== undefined ? positionProps.top + 'px' : ''
      hoverElement.current.style.width =
        positionProps !== undefined ? positionProps.width + 'px' : ''
      hoverElement.current.style.height =
        positionProps !== undefined ? positionProps.height + 'px' : ''
    }
  }

  return (
    <ul className='flex justify-center text-white items-center max-[550px]:hidden'>
      <div
        ref={hoverElement}
        className='hover-box absolute bg-black/10 backdrop-blur-lg rounded transition-all duration-[400ms] ease-in-out z-10 opacity-0'
      />
      {navList.map((navLink: string, i: number) => {
        return <NavElement key={i} to={navLink} setProps={setPositionProps} hideBox={hideBox} />
      })}
    </ul>
  )
}

export default Nav
