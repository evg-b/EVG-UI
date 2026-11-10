export default function (rgba) {
    let sep = rgba.includes(",") ? "," : " ";
    rgba = rgba.substr(5).split(")")[0].split(sep);

    if (rgba.reduce((num, nextNum) => num + nextNum).includes('%')) {
        for (let R in rgba) {
            let r = rgba[R];
            let p = r.substr(0, r.length - 1) / 100;
            rgba[R] = R < 3 ? Math.round(p * 255) : p
        }
    }
    return rgba.map(n => +n)
}