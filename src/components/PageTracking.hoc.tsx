'use client';
import { usePathname } from 'next/navigation';
import { type PropsWithChildren, useEffect } from 'react';

const PageTracking = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA4_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return <>{children}</>;
};

export default PageTracking;
