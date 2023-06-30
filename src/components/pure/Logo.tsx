import LOGO from '../../assets/SS-LOGO-2.png'

const Logo: React.FC = () => {
  return (
    <div className='flex flex-grow basis-0 items-center gap-3 logo-section'>
      <img className='ml-3 w-16 h-fit' src={LOGO} alt='LOGO' />
    </div>
  )
}

export default Logo
