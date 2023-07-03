import { type Project } from '../../interfaces/data'

const Card: React.FC<{ project: Project; small?: boolean }> = ({
  project,
  small = false,
}: {
  project: Project
  small?: boolean
}) => {
  return (
    <div
      className={
        'border-[2px] border-secondary_bg hover:border-details [&_h3]:hover:text-details box overflow-hidden text-center relative rounded bg-center bg-[length:140%] hover:bg-[length:160%] bg-no-repeat transition-all' +
        (small ?? false ? ' w-[250px] h-[150px]' : ' w-[300px] h-[200px]')
      }
      style={{ backgroundImage: `url(${project.img})` }}
    >
      <span className='original'>
        <h3 className='font-bold text-xl uppercase bg-secondary_bg px-1.5 '>{project.title}</h3>
      </span>
      <div className='overlay w-full h-full absolute left-0 right-0 top-0 bottom-0 '>
        <div
          className={
            'flex justify-center gap-3 bg-secondary_bg h-full' + (small ? ' pt-2' : ' pt-1.5')
          }
        >
          <a target='_blank' href={project.link} rel='noreferrer'>
            <i
              className={
                'text-white bx bx-window-open hover:text-details' + (small ? ' bx-sm' : ' bx-md')
              }
            ></i>
          </a>
          <a target='_blank' href={project.repo} rel='noreferrer'>
            <i
              className={
                'text-white bx bxl-github hover:text-details' + (small ? ' bx-sm' : ' bx-md')
              }
            ></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
