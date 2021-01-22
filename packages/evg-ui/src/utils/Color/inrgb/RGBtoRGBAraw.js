export default function (rgb) {
    let sep = rgb.includes(",") ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    if (rgb.reduce((num, nextNum) => num + nextNum).includes('%')) {
        for (let R in rgb) {
            let r = rgb[R];
            rgb[R] = Math.round(r.substr(0, r.length - 1) / 100 * 255);
        }
    }
    return [...rgb.map(n => +n), 1]
}