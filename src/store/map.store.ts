// stores/mapStore.ts
import { create } from 'zustand';

interface MapState {
  highlightedState?: string;
  setHighlightedState: (state: string) => void;
}

export const useMapStore = create<MapState>((set) => ({
  highlightedState: '',
  setHighlightedState: (state: string) => set({ highlightedState: state }),
}));
