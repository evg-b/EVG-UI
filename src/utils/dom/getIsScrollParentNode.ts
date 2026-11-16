// Спасибо за идею popper-core/src/dom-utils/isScrollParent.
export default function getIsScrollParentNode(node: Element) {
  const { overflow, overflowX, overflowY } = getComputedStyle(node)
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
}
