import ColorDetective from './ColorDetective'
import RGBtoRGBAraw from './inrgb/RGBtoRGBAraw'
import RGBAtoRGBAraw from './inrgb/RGBAtoRGBAraw'
import HEXtoRGBAraw from './inrgb/HEXtoRGBAraw'
import HEXAtoRGBAraw from './inrgb/HEXAtoRGBAraw'
import HSLtoRGBAraw from './inrgb/HSLtoRGBAraw'
import HSLAtoRGBAraw from './inrgb/HSLAtoRGBAraw'
import ColorObject from './ColorObject'
export default function Color(colorName = '') {
    // тут будет switch по результатам ColorDetective создавать Color объект и возвращать его
    let detective = ColorDetective(colorName)
    let RGBAraw
    switch (detective.format) {
        // сюда попадает format - RGB/RGBA/HEX/HEXA/HSL/HSLA
        // тут идет расщепление на R G B A
        case 'RGB':
            RGBAraw = RGBtoRGBAraw(detective.value)
            break
        case 'RGBA':
            RGBAraw = RGBAtoRGBAraw(detective.value)
            break
        case 'HEX':
            RGBAraw = HEXtoRGBAraw(detective.value)
            break
        case 'HEXA':
            RGBAraw = HEXAtoRGBAraw(detective.value)
            break
        case 'HSL':
            RGBAraw = HSLtoRGBAraw(detective.value)
            break
        case 'HSLA':
            RGBAraw = HSLAtoRGBAraw(detective.value)
            break
    }
    return new ColorObject(...RGBAraw, detective.format)
}