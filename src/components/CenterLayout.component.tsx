import { type PropsWithChildren } from 'react';

const CenterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="w-full overflow-hidden bg-transparent shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default CenterLayout;
