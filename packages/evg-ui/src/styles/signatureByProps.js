const signatureByProps = (displayName = 'componentEVG', props = {}) => {
    const hashByProps = Object.values(props).reduce((nowP, nextP) => {
        if (typeof nextP === 'string' || typeof nextP === 'boolean' || typeof nextP === 'number') {
            return nowP + nextP
        } else if (Array.isArray(nextP)) {
            return nowP + nextP.length
        } else {
            return nowP
        }
    }, `${displayName}-`)
    // typeof nextP === 'string' || typeof nextP === 'boolean' || typeof nextP === 'number' ? nowP + nextP : nowP
    // , `${displayName}-`)
    return hashByProps
}

export default signatureByProps