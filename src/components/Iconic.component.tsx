import Image from 'next/image';
import React, { memo } from 'react';

interface IconicProps {
  caption: string;
  path: string;
  alt: string;
  active?: boolean;
}

const Iconic = memo(function Iconic({
  active = false,
  caption,
  path,
  alt,
}: IconicProps) {
  return (
   
  );
});

export default Iconic;
