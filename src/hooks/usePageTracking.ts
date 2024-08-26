// app/hooks/usePageTracking.ts
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA4_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default usePageTracking;
