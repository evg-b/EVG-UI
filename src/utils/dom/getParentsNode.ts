export default function getParentsNode(node: Node): Array<HTMLElement> {
  const parent = node.parentElement
  return parent ? [parent, ...getParentsNode(parent)] : []
}
