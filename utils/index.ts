import { isEmpty, pickBy } from 'lodash'
import { useEffect } from 'react'
//hook
export const useClickOutside = (
    ref: React.MutableRefObject<null | HTMLDivElement>,
    handler: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            handler(event)
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}
//common function
export const cleanObject = (obj: any) => {
    if (typeof obj !== 'object') return obj
    Object.keys(obj).forEach(
        key => typeof obj[key] === 'string' && obj[key].trim()
    )
    return pickBy(obj, item => {
        switch (true) {
            case typeof item === 'string':
                return !isEmpty(item)
            case item === null || item === undefined:
                return false
            default:
                return true
        }
    })
}