// app/search/page.tsx

import { CardItem, type CardItemParams } from '@components/CardItem';
import { redirect } from 'next/navigation';
import SearchSection from '../home/components/SearchSection';

const items: Array<CardItemParams> = [
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
  {
    alt: 'Teste',
    href: '/',
    src: '/guindaste.png',
    state: 'Rio de Janeiro',
    model: 'Modelo',
    price: '300',
    title: 'Titulo genérico',
  },
];

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const queryName = searchParams.q;

  if (!queryName) {
    return redirect('/');
  }

  return (
    <div>
      <div className="mt-14">
        <SearchSection />
        <h2 className="mt-24 text-center text-6xl font-black text-gray-light after:mx-auto after:mt-3 after:block after:h-1.5 after:w-32 after:bg-primary after:content-['']">
          Resultado da pesquisa
        </h2>
        <p className="my-20 text-center text-3xl">{queryName}</p>
        <ul className="mx-auto mb-20 mt-20 flex w-full flex-wrap justify-center gap-x-4 gap-y-9">
          {items.map(
            ({ alt, href, src, model, state, price, title }, index) => (
              <CardItem
                key={`Item - ${index}`}
                alt={alt}
                href={href}
                model={model}
                src={src}
                state={state}
                price={price}
                title={title}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
