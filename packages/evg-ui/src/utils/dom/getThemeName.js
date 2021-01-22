export default function () {
    // ищем в определенном месте dom название активной темы и возвращаем
    // let thName = document.body.getAttribute('th-name')
    // if (thName) {
    //     console.log('[getThemeName] themeName yes:', thName)
    // } else {
    //     console.log('[getThemeName] themeName no:', thName)
    // }
    return typeof window !== "undefined" ? document.body.getAttribute('th-name') : ''
}