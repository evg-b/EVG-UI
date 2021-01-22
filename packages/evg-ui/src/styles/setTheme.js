const setTheme = (nameTheme) => {
    // 1. check
    if (typeof nameTheme !== 'string') {
        // return status-wrong
        // console.error - пояснения
    }
    // 2. setBody
    const res = document.body.setAttribute('th-name', nameTheme)
    // 3. dispathEvent
    document.body.dispatchEvent(new CustomEvent('changeTheme', { bubbles: true }))
    // return status
}

export default setTheme