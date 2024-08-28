'use client';

import { useMachineStore } from '@store/machine.store';
import ButtonMachineAction from './ButtonMachineAction.component';

const machines = [
  {
    caption: 'Empilhadeiras3',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras2',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras1',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras4',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras5',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras6',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras7',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras8',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
  {
    caption: 'Empilhadeiras9',
    path: '/empilhadeiras-logo.svg',
    alt: 'Empilhadeiras',
  },
];

function MachineTypeRow() {
  const { selectedMachine } = useMachineStore();

  return (
    <div className="container mx-auto flex flex-wrap items-center justify-start gap-2">
      {machines.map(({ alt, caption, path }, index) => (
        <ButtonMachineAction
          id={caption}
          key={`Item - ${index} - ${caption}`}
          active={selectedMachine === caption}
          alt={alt}
          caption={caption}
          path={path}
        />
      ))}
    </div>
  );
}

export default MachineTypeRow;
