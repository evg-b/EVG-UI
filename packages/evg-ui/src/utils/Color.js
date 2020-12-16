import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    gray,
    blueGray,
} from '../colors';

const notFoundColor = '#FFFFFF'
const DefaultLevelColor = '600'
const MapColor = {
    'red': red,
    'pink': pink,
    'purple': purple,
    'deepPurple': deepPurple,
    'indigo': indigo,
    'blue': blue,
    'lightBlue': lightBlue,
    'cyan': cyan,
    'teal': teal,
    'green': green,
    'lightGreen': lightGreen,
    'lime': lime,
    'yellow': yellow,
    'amber': amber,
    'orange': orange,
    'deepOrange': deepOrange,
    'brown': brown,
    'gray': gray,
    'blueGray': blueGray,
}
const MapTheme = {
    // 'default': '#00000000',
    'default': '#FFFFFF00',
    'primary': blue[DefaultLevelColor],
    // secondary
    'warn': orange[DefaultLevelColor],
    'success': green[DefaultLevelColor],
    'fail': red[DefaultLevelColor],
}
function Contrast(color) {
    // 1) color принимать в формате HEX
    const [r, g, b] = [parseInt(color.slice(1, 3), 16), parseInt(color.slice(3, 5), 16), parseInt(color.slice(5, 7), 16)]
    const Brightness = Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068)
    return Brightness < 140 ? '#FFFFFF' : '#000000'
}
function ConstructorColor(color) {
    return { Color: color === '#FFFFFF00' ? 'inherit' : color, Contrast: Contrast(color) }
}
function getCssVar(cssVarName) {
    /*
        поиск cssVar ведется в корневом эелемнте документа.
        предполагается что все cssVar создаются через :root в css файле
    */
    let cssVar = getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim()
    return cssVar ? cssVar : notFoundColor
}
export default function Color(colorName = '') {
    if (colorName.indexOf('--') === 0) {
        colorName = getCssVar(colorName)
    }
    for (let key in MapTheme) {
        if (key === colorName) {
            // 1 - узнаем какая глобальная тема в body
            // 2 - 
            return ConstructorColor(MapTheme[colorName])
        }
    }
    for (let key in MapColor) {
        if (colorName.includes(key)) {
            let colorKey = colorName.replace(key, '')
            let resultColor = MapColor[key][colorKey]
            resultColor = resultColor ? resultColor : MapColor[key][DefaultLevelColor]
            return ConstructorColor(resultColor)
        }
    }
    // если мы не распознали цвет то применяем для него дефолтное значение чтобы хоть что-то вернуть
    return ConstructorColor(colorName)
}