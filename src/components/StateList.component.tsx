'use client';
import Link from 'next/link';
import React from 'react';
import { BrazilStateMap } from '@interfaces/BrazilStates';
import { useMapStore } from '@store/map.store';

const stateFirstColumn = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
];

const stateSecondColumn = [
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

export const StateList = () => {
  const { setHighlightedState } = useMapStore();

  const handleMouseEnter = (state: string) => {
    const uf = BrazilStateMap.get(state);
    if (uf) {
      setHighlightedState(uf);
    }
  };

  const handleMouseLeave = () => {
    setHighlightedState('');
  };

  return (
    <section className="flex justify-between">
      <ul className="list-none pl-16">
        {stateFirstColumn.map((state) => (
          <li key={state} className="relative pl-4 py-1">
            <Link
              href="#"
              className="text-2xl hover:text-primary hover:font-semibold flex align-middle"
              onMouseEnter={() => handleMouseEnter(state)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-default font-bold" aria-hidden="true">
                •
              </span>
              <p className="pl-4">{state}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="list-none pl-16">
        {stateSecondColumn.map((state) => (
          <li key={state} className="relative pl-4 py-1">
            <Link
              href="#"
              className="text-2xl hover:text-primary hover:font-semibold flex align-middle"
              onMouseEnter={() => handleMouseEnter(state)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-default font-bold" aria-hidden="true">
                •
              </span>
              <p className="pl-4">{state}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
