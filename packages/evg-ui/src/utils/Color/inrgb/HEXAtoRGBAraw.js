export default function (hexa) {
    let r = 0, g = 0, b = 0, a = 1;

    if (hexa.length === 5) {
        r = "0x" + hexa[1] + hexa[1];
        g = "0x" + hexa[2] + hexa[2];
        b = "0x" + hexa[3] + hexa[3];
        a = "0x" + hexa[4] + hexa[4];
    } else if (hexa.length === 9) {
        r = "0x" + hexa[1] + hexa[2];
        g = "0x" + hexa[3] + hexa[4];
        b = "0x" + hexa[5] + hexa[6];
        a = "0x" + hexa[7] + hexa[8];
    }
    a = (a / 255).toFixed(3);
    return [+r, +g, +b, +a]
}