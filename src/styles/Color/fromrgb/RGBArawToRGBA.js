export default function RGBArawToRGBA({ r, g, b, a }, alpha = false) {
    return alpha ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`
}