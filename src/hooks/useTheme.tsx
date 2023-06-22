import { useState, useEffect } from "react"
import { getActualTheme, setThemeInStorage, switchTheme } from "../services/theme"

const useTheme = () => {

    const [theme, setTheme] = useState<string>(getActualTheme())

    const changeTheme = () => setTheme(switchTheme(theme))

    useEffect(() => setThemeInStorage(theme), [theme])


    return { theme, changeTheme }
}

export default useTheme