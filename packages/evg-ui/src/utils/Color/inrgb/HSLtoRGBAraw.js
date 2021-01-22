export default function (hsl) {
    let sep = hsl.includes(",") ? "," : " "
    hsl = hsl.substr(4).split(")")[0].split(sep)

    let h = hsl[0]
    let s = hsl[1].substr(0, hsl[1].length - 1) / 100
    let l = hsl[2].substr(0, hsl[2].length - 1) / 100

    if (h.includes("deg")) {
        h = h.substr(0, h.length - 3)
    } else if (h.includes("rad")) {
        h = Math.round(h.substr(0, h.length - 3) / (2 * Math.PI) * 360)
    } else if (h.includes("turn")) {
        h = Math.round(h.substr(0, h.length - 4) * 360)
    }

    if (h >= 360) {
        h %= 360
    }

    let c = (1 - Math.abs(2 * l - 1)) * s
    let x = c * (1 - Math.abs((h / 60) % 2 - 1))
    let m = l - c / 2
    let r = 0
    let g = 0
    let b = 0

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return [r, g, b, 1]
}