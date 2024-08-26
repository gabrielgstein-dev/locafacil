'use client';
import React, { ButtonHTMLAttributes } from 'react';
import { useMachineStore } from '@store/machine.store';

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

export default function ButtonAction({
  children,
  className,
  ...props
}: React.PropsWithChildren<ButtonActionProps>) {
  const { setSelectedMachine } = useMachineStore((state) => state);
  const handleClick = async () => {
    setSelectedMachine(props.id);
  };
  return (
    <button
      {...props}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
