import { useEffect, useRef } from 'react'

export function useScrollEvent(handler) {
    const refHandler = useRef()

    useEffect(() => {
        refHandler.current = handler
    }, [handler])

    useEffect(() => {
        const eventListener = (event) => refHandler.current(event)
        window.addEventListener('scroll', eventListener)
        return () => {
            window.removeEventListener('scroll', eventListener)
        }
    }, [])
}

export default useScrollEvent
