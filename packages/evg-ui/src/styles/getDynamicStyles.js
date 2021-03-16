const getDynamicStyles = (styles = {}, keyFramesMap, snippetDynamicFunction) => {
    // jss/packages/jss/src/utils/getDynamicStyles.js
    // Это fix который учитывает keyframes для динамических стилей, чего не делает оригинал.
    let to = null

    for (const key in styles) {
        const value = styles[key]
        const type = typeof value

        if (key.includes('@keyframes')) {
            keyFramesMap.set(key.replace('@keyframes ', '$'), value)
        }
        if (type === 'function') {
            if (!to) to = {}
            to[key] = value
            snippetDynamicFunction.snippet += value.toString()

        } else if (type === 'object' && value !== null && !Array.isArray(value)) {
            const extracted = getDynamicStyles(value, keyFramesMap, snippetDynamicFunction)
            if (extracted) {
                if (!to) to = {}
                to[key] = extracted
            }
        }
    }
    // add keyframe for dynamicStyle
    return to
}

export default getDynamicStyles