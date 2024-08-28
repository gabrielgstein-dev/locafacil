'use client';
import { BrazilStateMap } from '@interfaces/BrazilStates';
import { useMapStore } from '@store/map.store';
import Link from 'next/link';
import React from 'react';

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
          <li key={state} className="relative py-1 pl-4">
            <Link
              href="#"
              className="flex align-middle text-2xl hover:font-semibold hover:text-primary"
              onMouseEnter={() => handleMouseEnter(state)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="font-bold text-gray-default" aria-hidden="true">
                •
              </span>
              <p className="pl-4">{state}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="list-none pl-16">
        {stateSecondColumn.map((state) => (
          <li key={state} className="relative py-1 pl-4">
            <Link
              href="#"
              className="flex align-middle text-2xl hover:font-semibold hover:text-primary"
              onMouseEnter={() => handleMouseEnter(state)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="font-bold text-gray-default" aria-hidden="true">
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
