'use client';
import React from 'react';
import ButtonMachineAction from './ButtonMachineAction.component';
import Iconic from '@components/Iconic.component';
import { useMachineStore } from '@store/machine.store';

function MachineTypeRow() {
  const { machines, selectedMachine } = useMachineStore();

  return (
    <div className="flex space-x-2">
      {machines.map((machine) => (
        <ButtonMachineAction id={machine.caption} key={machine.caption}>
          <Iconic
            key={machine.caption}
            caption={machine.caption}
            path={machine.path}
            alt={machine.alt}
            active={selectedMachine === machine.caption}
          />
        </ButtonMachineAction>
      ))}
    </div>
  );
}

export default MachineTypeRow;
