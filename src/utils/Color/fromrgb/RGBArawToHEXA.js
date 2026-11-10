export default function ({ r, g, b, a }, alpha = false) {
    let hr, hg, hb, ha = ''
    hr = (r).toString(16)
    hg = (g).toString(16)
    hb = (b).toString(16)

    if (hr.length === 1) { hr = '0' + hr }
    if (hg.length === 1) { hg = '0' + hg }
    if (hb.length === 1) { hb = '0' + hb }
    if (alpha) {
        ha = Math.round(a * 255).toString(16)
        if (ha.length === 1) { ha = '0' + ha }
    }
    return `#${hr}${hg}${hb}${ha}`.toUpperCase()
}