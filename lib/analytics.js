import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // TODO: Add analytics
      // Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      //   includedDomains: ['mralexsaavedra.dev']
      // });
    }

    function onRouteChangeComplete () {
      // Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
}