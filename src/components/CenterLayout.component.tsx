import React, { ReactNode } from 'react';
import withPageTracking from '@components/PageTracking.hoc';

interface CenterLayoutProps {
  children: ReactNode;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children }) => {
  return (
    <div className="bg-transparent min-h-screen min-w-[1920px] flex justify-center items-center">
      <div className="w-full max-w-[1920px] bg-transparent shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default CenterLayout;
