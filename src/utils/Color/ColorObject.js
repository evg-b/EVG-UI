import RGBArawToRGBA from './fromrgb/RGBArawToRGBA'
import RGBArawToHEXA from './fromrgb/RGBArawToHEXA'
import RGBArawToHSLA from './fromrgb/RGBArawToHSLA'
import ColorContrast from './ColorContrast'
import ColorCheckAlpha from './ColorCheckAlpha'
export default class ColorObject {
    constructor(r, g, b, a, format) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
        this.format = format
    }
    Color(format = this.format, alpha) {
        alpha = alpha ? ColorCheckAlpha(alpha) ? alpha : this.a : this.a
        let rgba = { r: this.r, g: this.g, b: this.b, a: alpha }
        switch (format.toUpperCase()) {
            case 'RGB':
                return RGBArawToRGBA(rgba)
            case 'RGBA':
                return RGBArawToRGBA(rgba, true)
            case 'HEX':
                return RGBArawToHEXA(rgba)
            case 'HEXA':
                return RGBArawToHEXA(rgba, true)
            case 'HSL':
                return RGBArawToHSLA(rgba)
            case 'HSLA':
                return RGBArawToHSLA(rgba, true)
        }
    }
    Contrast(format = this.format, alpha) {
        let c = ColorContrast.call(this)
        alpha = alpha ? ColorCheckAlpha(alpha) ? alpha : this.a : this.a
        let rgba = { ...c, alpha }
        switch (format.toUpperCase()) {
            case 'RGB':
                return RGBArawToRGBA(rgba)
            case 'RGBA':
                return RGBArawToRGBA(rgba, true)
            case 'HEX':
                return RGBArawToHEXA(rgba)
            case 'HEXA':
                return RGBArawToHEXA(rgba, true)
            case 'HSL':
                return RGBArawToHSLA(rgba)
            case 'HSLA':
                return RGBArawToHSLA(rgba, true)
        }
    }
    // Color() {

    // }
}