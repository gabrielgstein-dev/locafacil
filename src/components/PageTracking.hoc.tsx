'use client';
import { usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface PageTrackingProps {
  children: ReactNode;
}

const PageTracking: React.FC<PageTrackingProps> = ({ children }) => {
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
