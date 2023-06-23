import { useState } from 'react'

interface Props {
    img: string
    repo: string
    link: string
    title: string
}

const Card = ({ img, repo, link, title }: Props) => {
    const [hover, setHover] = useState(false)

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={'max-h-[150px] transition-all duration-200' + (hover ? ' scale-110' : '')}>
            <a href={link} target='_blank' className={"border rounded w-[250px] h-[150px] flex items-end cursor-pointer hover:border-details bg-no-repeat  " + (hover ? 'blur-[1px] bg-[length:130%]' : 'bg-cover')} style={{ backgroundImage: `url(${img})`, backgroundPosition: '50% 50%' }} />
            <a href={link} target='_blank' className='flex items-center relative bottom-[38px] pl-2'>
                <h1 className={'text-2xl mr-3 ' + (hover && 'text-details')}>{title}</h1>
                <div className='flex gap-2 pt-2'>
                    <a href={repo} className='hover:text-details transition duration-0' target='_blank'><i className='bx bxl-github bx-sm' /></a>
                    <a href={link} className='hover:text-details transition duration-0' target='_blank'><i className='bx bx-code-block bx-sm' /></a>
                </div>
            </a >
        </div>
    )
}

export default Card