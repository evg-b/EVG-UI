import rgbToHsl from './rgbToHsl';
import hslToRgb from './hslToRgb';

function convertToTwoDigitHexCodeFromDecimal(decimal) {
    var code = Math.round(decimal).toString(16);

    (code.length > 1) || (code = '0' + code);
    return code;
}
export default function brightChange(rgbcode, percent) {
    const [r, g, b] = [parseInt(rgbcode.slice(1, 3), 16), parseInt(rgbcode.slice(3, 5), 16), parseInt(rgbcode.slice(5, 7), 16),]
    let HSL = rgbToHsl(r, g, b)
    let newLightness = HSL[2] + HSL[2] * (percent / 100)
    newLightness = newLightness > 1 ? 1 : newLightness
    newLightness = newLightness < 0 ? 0 : newLightness
    let RGB = hslToRgb(HSL[0], HSL[1], newLightness);
    rgbcode = '#'
        + convertToTwoDigitHexCodeFromDecimal(RGB[0])
        + convertToTwoDigitHexCodeFromDecimal(RGB[1])
        + convertToTwoDigitHexCodeFromDecimal(RGB[2]);

    return rgbcode;
}