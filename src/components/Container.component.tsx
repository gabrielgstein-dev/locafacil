import { type ReactNode, type ElementType } from 'react';

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  customPadding?: boolean;
}

export const Container = ({
  children,
  as: Tag = 'div',
  customPadding = false,
  className = '',
}: ContainerProps) => {
  return (
    <Tag className={`${!customPadding ? 'px-64' : ''} ${className}`}>
      {children}
    </Tag>
  );
};
