export default function (alpha) {
    let alphaCheck = alpha
    if (typeof alpha === 'string' && alpha.length > 1 && alpha.includes('%')) {
        alphaCheck = alpha.substr(0, alpha.length - 1) / 100
    }
    if (typeof +alphaCheck === 'number' && +alphaCheck <= 1) {
        return true
    } else {
        return false
    }
}