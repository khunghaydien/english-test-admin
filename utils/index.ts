import { MAX_ELLIPSIS } from '@/const/app.const'
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
export const getTextEllipsis = (
    text: any,
    maxEllipsis?: number | undefined
) => {
    const _maxEllipsis = maxEllipsis || MAX_ELLIPSIS
    let _text = text?.toString() || ''
    const indexBreakLine = _text.indexOf('\n')
    if (indexBreakLine > -1) {
        _text = `${text?.slice(0, indexBreakLine)}`
    }
    if (_text?.length < _maxEllipsis && indexBreakLine > -1) {
        return `${_text}...`
    } else if (_text?.length < _maxEllipsis && indexBreakLine === -1) {
        return _text
    }
    if (_text.length === _maxEllipsis) return _text
    return `${_text?.slice(0, _maxEllipsis)}...`
}