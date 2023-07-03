import { type ISocial } from '../../interfaces/data'

const SocialElement: React.FC<{ socialNetwork: ISocial }> = ({
  socialNetwork,
}: {
  socialNetwork: ISocial
}) => {
  return (
    <a
      className='flex items-center justify-around border border-text rounded text-text px-5 py-5 hover:scale-110 transition-all [&_h2]:hover:text-details [&_i]:hover:text-details hover:border-details max-w-[420px]'
      target='_blank'
      href={socialNetwork.link}
      rel='noreferrer'
    >
      <i className={'text-[150px] text-text mr-2.5 ' + socialNetwork.code}></i>
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>{socialNetwork.name}</h2>
        <span className='opacity-60 font-bold -mt-1.5'>{socialNetwork.shortedLink}</span>
        <p className='mt-1.5'>{socialNetwork.description}</p>
      </div>
    </a>
  )
}

export default SocialElement
