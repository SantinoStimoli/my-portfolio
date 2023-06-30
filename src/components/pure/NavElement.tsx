import navFormater from '../../services/navFormater'
import { useRef } from 'react'
import { type Position } from '../../interfaces/functionProps'

interface Props {
  to: string
  setProps: ({ left, top, width, height }: Position) => void
  hideBox: () => void
}

const NavElement: React.FC<Props> = ({ to, setProps, hideBox }: Props) => {
  const element = useRef<HTMLAnchorElement | null>(null)

  function getProps(): void {
    const props = element.current?.getBoundingClientRect()
    setProps({ left: props?.left, top: props?.top, width: props?.width, height: props?.height })
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
      className='max-sm:text-xs px-1 py-2 sm:px-3 sm:py-2 rounded z-10 cursor-pointer'
    >
      {to}
    </a>
  )
}

export default NavElement
