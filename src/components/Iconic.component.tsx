import Image from 'next/image';
import React from 'react';

interface IconicProps {
  caption: string;
  path: string;
  alt: string;
  active?: boolean;
}

export default function Iconic({
  active = false,
  caption,
  path,
  alt,
}: IconicProps) {
  return (
    <div className="h-[169px] w-[169px] text-center cursor-pointer">
      <div
        className={`${active ? 'bg-primary' : 'bg-secondary'} relative w-full h-full flex flex-col items-center justify-center`}
      >
        <div className="w-4/5 h-4/5 relative">
          <Image
            src={path}
            alt={alt}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      <p className="w-full text-xl font-semibold mt-2">{caption}</p>
    </div>
  );
}
