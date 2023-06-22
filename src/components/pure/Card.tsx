import { useState } from 'react'
import IMG from '../../assets/Ta-Te-Ti.png'

interface Props {
    img: string
    repo: string
    link: string
    title: string
    description: string
}

const Card = ({ img = IMG, repo = 'https://github.com/santino-stimoli/Ta-Te-Ti', link = 'https://santino-stimoli.github.io/Ta-Te-Ti/', title = 'Ta Te Ti' }: Props) => {
    const [hover, setHover] = useState(false)

    return (
        <a href={link} target='_blank' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={"mini-card border rounded w-[250px] h-[150px] flex items-end cursor-pointer " + (hover && ' blur-[1px] relative ')} style={{ backgroundImage: `url(${img})` }}>
            <div>
                <h1 className='text-2xl pl-2.5 pb-1'>{title}</h1>
                <span><a href={link}></a></span>
            </div>
        </a >
    )
}

export default Card