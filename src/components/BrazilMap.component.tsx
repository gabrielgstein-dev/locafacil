'use client';
import { useMapStore } from '@store/map.store';
import { BrazilSvgMap } from './ui/BrazilSvgMap.ui';

export const BrazilMap = () => {
  const { highlightedState } = useMapStore();
  return (
    <section>
      <BrazilSvgMap currentState={highlightedState} />
    </section>
  );
};
