import { useRef } from 'react'
import { type Position } from '../../interfaces/functionProps'
import navFormater from '../../services/navFormater'

interface Props {
  to: string
  setProps: ({ left, top, width, height }: Position) => void
  hideBox: () => void
}

const NavElement: React.FC<Props> = ({ to, setProps, hideBox }: Props) => {
  const element = useRef<HTMLAnchorElement | null>(null)

  function getProps(): void {
    const positionProps = element.current?.getBoundingClientRect()
    setProps({
      left: positionProps?.left ?? 0,
      top: positionProps?.top ?? 0,
      width: positionProps?.width ?? 0,
      height: positionProps?.height ?? 0,
    })
  }

  function scrollToElement(elementId: string): void {
    console.log(elementId)

    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      ref={element}
      onMouseEnter={() => {
        getProps()
      }}
      onMouseLeave={() => {
        hideBox()
      }}
      onClick={() => {
        scrollToElement(navFormater(to))
      }}
      className='max-md:text-xs px-1 py-2 md:px-3 md:py-2 rounded z-10 cursor-pointer'
    >
      {to}
    </a>
  )
}

export default NavElement
