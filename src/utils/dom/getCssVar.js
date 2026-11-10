export default function getCssVar(cssVarName) {
    /*
        поиск cssVar ведется в корневом элементе документа.
        предполагается что все cssVar находятся в :root
    */
    let cssVar = typeof window !== "undefined" ? window.getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim() : ''
    return cssVar.replace(/"/g, '')
}