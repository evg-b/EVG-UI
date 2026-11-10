import HSLtoRGBAraw from './inrgb/HSLtoRGBAraw'
export default function ({ r, g, b, a }, percent = 0) {
    if (typeof percent !== 'number') {
        percent = 0
    }

    r = r / 255
    g = g / 255
    b = b / 255

    let cmin = Math.min(r, g, b)
    let cmax = Math.max(r, g, b)
    let delta = cmax - cmin
    let h, s, l = 0

    if (delta == 0) {
        h = 0
    } else if (cmax == r) {
        h = ((g - b) / delta) % 6;
    } else if (cmax == g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) { h += 360 }

    l = (cmax + cmin) / 2
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    let newLightness = l + l * (percent / 100)
    newLightness = newLightness > 100 ? 100 : newLightness < 0 ? 0 : newLightness
    let raw = HSLtoRGBAraw(`hsl(${h},${s}%,${+(newLightness).toFixed(1)}%)`)
    return { r: raw[0], g: raw[1], b: raw[2], a: raw[3] }
}