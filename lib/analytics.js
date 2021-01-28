import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '@/lib/gtag'

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    function onRouteChangeComplete (url) {
      if (process.env.NODE_ENV === 'production') {
        gtag.pageview(url)
      }
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
}
