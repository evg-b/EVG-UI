export default function hexToRGBA(h: string, opacity = 1) {
  let r = 0,
    g = 0,
    b = 0

  if (h.length == 4) {
    r = Number('0x' + h[1] + h[1])
    g = Number('0x' + h[2] + h[2])
    b = Number('0x' + h[3] + h[3])
  } else if (h.length == 7) {
    r = Number('0x' + h[1] + h[2])
    g = Number('0x' + h[3] + h[4])
    b = Number('0x' + h[5] + h[6])
  }

  return `rgba(${+r},${+g},${+b},${opacity})`
}
