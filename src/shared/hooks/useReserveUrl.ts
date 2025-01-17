import { setCookie } from 'cookies-next'
import { useEffect } from 'react'
import { APP_SAVE_KEY } from '../../Settings'
import { useRouter } from 'next/router'


export default function useReserveUrl() {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: string, { }) => {
            if (url === '/login') {
                setCookie(APP_SAVE_KEY.CURRENTPATH_NAME, '/')
            } else {
                setCookie(APP_SAVE_KEY.CURRENTPATH_NAME, url)
            }
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])
}