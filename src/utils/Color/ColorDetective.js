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
} from '../../colors';
import getCssVar from '../dom/getCssVar'
import getСolorNameInTheme from '../dom/getСolorNameInTheme'
const DefaultPaletteColor = '600'
const palettes = {
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
    'default': '#FFFFFF00',
    'primary': blue[DefaultPaletteColor],
    // secondary
    // background
    // surface
    'warn': orange[DefaultPaletteColor],
    'success': green[DefaultPaletteColor],
    'fail': red[DefaultPaletteColor],
}
const themes = ['default', 'primary', 'secondary', 'background', 'surface', 'warn', 'success', 'fail']
const themeTemplate = themes.reduce((name, next) => { return name + next })
const exRGB = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
const exRGBA = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
const exHEX = /^#([\da-f]{3}){1,2}$/i;
const exHEXA = /^#([\da-f]{4}){1,2}$/i;
const exHSL = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
const exHSLA = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
function ColorDetective(colorName = '', grafFromRecursion) {
    // console.log('[ColorDetective][colorName]', colorName, grafFromRecursion)
    //--- defender Recursion
    let graf = grafFromRecursion ? grafFromRecursion : new Map()
    if (graf.has(colorName)) {
        return 'unknown'
    } else {
        graf.set(colorName, colorName)
    }
    //----
    if (colorName !== '' && themeTemplate.includes(colorName)) {
        let colorNameInTheme = getСolorNameInTheme(colorName)
        // console.log('[ColorDetective][getСolorNameInTheme]', colorNameInTheme)
        // console.log('[ColorDetective][getCssVar]:', getCssVar(colorNameInTheme))
        let cssVarTheme = getCssVar(colorNameInTheme)
        // console.log('[ColorDetective][cssVarTheme]', cssVarTheme)
        return cssVarTheme ? ColorDetective(cssVarTheme, graf) : ColorDetective(MapTheme[colorName], graf)
    }
    if (colorName.indexOf('--') === 0) {
        // find css-var
        return ColorDetective(getCssVar(colorName), graf)
    }
    for (let paletteName in palettes) {
        if (colorName.includes(paletteName)) {
            // console.log('[palette] colorName:', colorName)
            // console.log('[palette] paletteName:', paletteName)
            let paletteNumber = colorName.replace(paletteName, '') // red700 -> 700
            // console.log('[palette] paletteNumber:', paletteNumber)
            let pallet = palettes[paletteName][paletteNumber]
            // console.log('[palette] pallet:', pallet)
            pallet = pallet ? pallet : palettes[paletteName][DefaultPaletteColor]
            // console.log('[palette] pallet fin:', pallet)
            return ColorDetective(pallet, graf)
        }
    }

    return DetectionRawFormat(colorName)
}

function DetectionRawFormat(colorName) {
    let format
    if (exRGB.test(colorName)) {
        format = 'RGB'
    }
    if (exRGBA.test(colorName)) {
        format = 'RGBA'
    }
    if (exHEX.test(colorName)) {
        format = 'HEX'
    }
    if (exHEXA.test(colorName)) {
        format = 'HEXA'
    }
    if (exHSL.test(colorName)) {
        format = 'HSL'
    }
    if (exHSLA.test(colorName)) {
        format = 'HSLA'
    }
    return new ColorRaw(format, colorName)
}
function ColorRaw(format = 'unknown', value = 'unknown') {
    this.format = format
    this.value = value
}
export default ColorDetective