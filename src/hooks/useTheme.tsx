import { useState, useEffect } from "react"
import { THEME, getActualTheme, setThemeInStorage, switchTheme } from "../services/theme"

const useTheme = () => {

    const [theme, setTheme] = useState<string>(getActualTheme())

    const changeTheme = () => {
        setTheme(switchTheme(theme))
        theme === THEME.LIGHT ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    }

    useEffect(() => setThemeInStorage(theme), [theme])


    return { theme, changeTheme }
}

export default useTheme