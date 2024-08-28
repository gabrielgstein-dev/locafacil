'use client';
import { useMachineStore } from '@store/machine.store';
import Image from 'next/image';
import { memo } from 'react';

type ButtonActionParams = {
  id: string;
  caption: string;
  path: string;
  alt: string;
  active: boolean;
};

const ButtonAction = memo(function ButtonAction({
  active,
  alt,
  caption,
  id,
  path,
}: ButtonActionParams) {
  const setSelectedMachine = useMachineStore(
    (state) => state.setSelectedMachine,
  );

  const handleClick = () => {
    setSelectedMachine(id);
  };

  return (
    <button onClick={handleClick} className={`cursor-pointer`}>
      <div className="cursor-pointer text-center">
        <div
          className={`${active ? 'bg-primary' : 'bg-secondary'} relative flex h-full w-full flex-col items-center justify-center`}
        >
          <div className="relative size-[170px]">
            <Image
              src={path}
              alt={alt}
              priority
              fill
              className="object-contain px-5 py-10"
            />
          </div>
        </div>
        <p className="mt-2 w-full text-xl font-semibold">{caption}</p>
      </div>
    </button>
  );
});

export default ButtonAction;
