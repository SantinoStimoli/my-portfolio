export const enum THEME {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export function switchTheme(theme: string): THEME {
  const changeObject: Record<string, THEME> = {
    DARK: THEME.LIGHT,
    LIGHT: THEME.DARK,
  }
  return changeObject[theme]
}

export function getActualTheme(): string {
  let actualTheme = localStorage.getItem('theme')
  if (actualTheme === null) {
    localStorage.setItem('theme', THEME.DARK)
    actualTheme = THEME.DARK
  }
  return actualTheme
}

export function setThemeInStorage(theme: string): void {
  localStorage.setItem('theme', theme)
}
