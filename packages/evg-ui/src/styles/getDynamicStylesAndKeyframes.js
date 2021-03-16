import getDynamicStyles from './getDynamicStyles'

const getDynamicStylesAndKeyframes = (styleObject) => {
    // тут запускаем свою getDynamicStyles
    let keyFramesMap = new Map()
    let snippetDynamicFunction = { snippet: '' }
    let dynamicStyles = getDynamicStyles(styleObject, keyFramesMap, snippetDynamicFunction)
    let result = snippetDynamicFunction.snippet.matchAll(/\$\w*/gm);
    Array.from(result).forEach(keyDynamicFrameName => {
        if (keyFramesMap.has(keyDynamicFrameName[0])) {
            dynamicStyles = { ...dynamicStyles, [`@keyframes ${keyDynamicFrameName[0].replace('$', '')}`]: keyFramesMap.get(keyDynamicFrameName[0]) }
        }
    })

    return dynamicStyles
}

export default getDynamicStylesAndKeyframes