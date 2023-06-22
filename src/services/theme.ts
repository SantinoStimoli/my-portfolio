export const enum THEME {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export function switchTheme(theme: string) {
    const changeObject: { [key: string]: THEME } = { DARK: THEME.LIGHT, LIGHT: THEME.DARK }
    return changeObject[theme]
}

export function getActualTheme() {
    let actualTheme = localStorage.getItem('theme')
    if (actualTheme === null) {
        localStorage.setItem('theme', THEME.LIGHT)
        actualTheme = THEME.LIGHT
    }
    return actualTheme
}

export function setThemeInStorage(theme: string) {
    localStorage.setItem('theme', theme)
}