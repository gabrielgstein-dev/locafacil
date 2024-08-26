import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

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
];

interface MachineState {
  machines: { caption: string; path: string; alt: string }[];
  selectedMachine: string;
  setSelectedMachine: (machine: string) => void;
}

export const useMachineStore = create<MachineState>()(
  persist(
    (set) => ({
      machines,
      selectedMachine: '',
      setSelectedMachine: (machine) => set({ selectedMachine: machine }),
    }),
    {
      name: 'machine-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
