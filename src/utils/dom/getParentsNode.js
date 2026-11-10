function getParentNode(node) {
    return node.parentNode.nodeName !== '#document' ? node.parentNode : null
}
function getParentsNode(node) {
    let parent = getParentNode(node)
    if (parent) {
        return [parent, ...getParentsNode(parent)]
    } else {
        return parent ? [parent] : []
    }
}
export default function (node) {
    return getParentsNode(node)
}