import { useEffect, useReducer } from 'react'

function useChangeTheme() {
    // forceUpdate
    const [, forceUpdate] = useReducer(x => x + 1, 0)
    // подписываешься на кастомный Event: changeTheme
    const forceUpdateWarp = () => {
        console.log('forceUpdate!')
        forceUpdate()
    }
    useEffect(() => {
        document.body.addEventListener('changeTheme', forceUpdateWarp)
        return () => {
            document.body.removeEventListener('changeTheme', forceUpdateWarp)
        }
    }, [])
}
export default useChangeTheme