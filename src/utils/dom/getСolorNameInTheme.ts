// ищет cssvar для актуальной theme
import getThemeName from './getThemeName'
export default function getColorNameInTheme(colorNameInTheme: string) {
  // создаем имя в cssvar формате в зависимости от активной темы
  let themeName = getThemeName() // name-
  themeName = themeName ? `${themeName}-` : ''
  let tepmlateCssVar = `--evg-${themeName}${colorNameInTheme}`
  return tepmlateCssVar
}
