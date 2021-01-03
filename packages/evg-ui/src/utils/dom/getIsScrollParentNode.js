/**
 * Спасибо за идею popper.js -> popper-core/src/dom-utils/isScrollParent.js
*/
export default function (node) {
    let { overflow, overflowX, overflowY } = getComputedStyle(node)
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}