import { THEME, getActualTheme } from "../services/theme"

const useTheme = () => {
    const theme = getActualTheme()

    const changeTheme = () => {
        if (theme === THEME.DARK) {
            localStorage.setItem('theme', THEME.LIGHT)
            console.log(THEME.LIGHT);
        }
        if (theme === THEME.LIGHT) {
            localStorage.setItem('theme', THEME.DARK)
            console.log(THEME.DARK);
        }
    }

    return { theme: theme, changeTheme: changeTheme }
}

export default useTheme