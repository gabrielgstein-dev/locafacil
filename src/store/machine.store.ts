import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface MachineState {
  selectedMachine: string;
  setSelectedMachine: (machine: string) => void;
}

export const useMachineStore = create<MachineState>()(
  persist(
    (set) => ({
      selectedMachine: '',
      setSelectedMachine: (machine) => set({ selectedMachine: machine }),
    }),
    {
      name: 'machine-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
