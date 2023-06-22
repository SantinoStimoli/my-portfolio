import useTheme from "../../hooks/useTheme"
import { THEME } from "../../services/theme"

const Logo = () => {

    const theme = useTheme().theme

    const LOGO = {
        DARK: '/SS-LOGO-1.png',
        LIGHT: '/SS-LOGO-2.png'
    }

    return (
        <div className="flex flex-grow basis-0 items-center gap-3 logo-section">
            <div className="w-fit my-auto z-20 md:bg-primary bg-primary">
                <img className="ml-3 w-16 h-fit" src={theme === THEME.DARK ? LOGO.DARK : LOGO.LIGHT} />
            </div>
            <span className=" text-white relative -left-28 z-10 transition-all duration-500 -md:hidden cursor-default opacity-0"> Santino Stimoli</span>
        </div>
    )
}

export default Logo