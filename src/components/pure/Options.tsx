import useTheme from "../../hooks/useTheme"
import { THEME } from "../../services/theme"

const Options = () => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className="flex flex-grow basis-0 justify-end items-center">
            <div className="flex items-center gap-1">
                <p onClick={() => changeTheme()} className="relative inline-flex items-center cursor-pointer">asasa</p>
                <box-icon type='solid' name={theme === THEME.LIGHT ? 'sun' : 'moon'}></box-icon>
            </div>

        </div>
    )
}

export default Options