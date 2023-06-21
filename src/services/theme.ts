export const enum THEME {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export type ThemeType = THEME

export function getActualTheme() {
    let actualTheme = localStorage.getItem('theme')
    if (actualTheme === null) {
        localStorage.setItem('theme', THEME.LIGHT)
        return THEME.LIGHT
    }
    console.log(actualTheme);

    return actualTheme
}