'use client';
import { BrazilSvgMap } from './ui/BrazilSvgMap.ui';
import { useMapStore } from '@store/map.store';

export const BrazilMap = () => {
  const { highlightedState } = useMapStore();
  return (
    <section>
      <BrazilSvgMap currentState={highlightedState} />
    </section>
  );
};
