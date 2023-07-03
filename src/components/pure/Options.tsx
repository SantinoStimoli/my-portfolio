import useTheme from '../../hooks/useTheme'
import { THEME } from '../../services/theme'

const Options: React.FC = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div className='flex flex-grow basis-0 justify-end items-center'>
      <div className='flex items-center gap-1'>
        <i
          className={
            'bx bx-md cursor-pointer text-white ' + (theme === THEME.LIGHT ? 'bx-sun' : 'bx-moon')
          }
          onClick={() => {
            changeTheme()
          }}
        />
      </div>
    </div>
  )
}

export default Options
