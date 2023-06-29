import { useState } from 'react'

interface Props {
  img: string
  repo: string
  link: string
  title: string
}

const Card: React.FC<Props> = ({ img, repo, link, title }: Props) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      className={'max-h-[150px] transition-all duration-200' + (hover ? ' scale-110' : '')}
    >
      <a
        href={link}
        target='_blank'
        className={
          'border rounded w-[250px] h-[150px] flex items-end cursor-pointer hover:border-details bg-no-repeat duration-200' +
          (hover ? ' blur-[1px] bg-[length:130%]' : ' bg-cover')
        }
        style={{ backgroundImage: `url(${img})`, backgroundPosition: '50% 50%' }}
        rel='noreferrer'
      />
      <a
        href={link}
        target='_blank'
        className={
          'flex flex-wrap items-center relative bottom-[38px] w-[250px] pl-2 transition-all ' +
          (hover ? 'opacity-100' : 'opacity-0')
        }
        rel='noreferrer'
      >
        <h1
          className={
            'bg-black/25 rounded px-1.5 tracking-tighter text-xl text-white mr-3 ' +
            (hover ? 'text-details' : '')
          }
        >
          {title}
        </h1>
        <div className='bg-black/25 flex gap-2 items-center rounded p-0.5 pb-0'>
          <a
            href={repo}
            className='hover:text-details transition duration-0 flex items-center'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-github bx-sm' />
          </a>
          <a
            href={link}
            className='hover:text-details transition duration-0 flex items-center'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bx-code-block bx-sm' />
          </a>
        </div>
      </a>
    </div>
  )
}

export default Card
