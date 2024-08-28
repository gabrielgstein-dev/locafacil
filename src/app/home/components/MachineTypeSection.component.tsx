import { CardItem, type CardItemParams } from '@components/CardItem';
import { SectionHeader } from '@components/SectionHeader.component';
import MachineTypeRowClient from 'src/app/home/components/MachineTypeRowClient';

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

export const MachineTypeSection = () => {
  return (
    <section className="mx-auto mb-20 w-full bg-[#EDEDED] px-16 py-32">
      <SectionHeader
        title="Tipo de máquina"
        subtitle="Selecione o tipo de equipamento que você precisa"
      />

      <MachineTypeRowClient />

      <ul className="mx-auto mt-20 flex w-full flex-wrap justify-center gap-x-4 gap-y-9">
        {items.map(({ alt, href, src, model, state, price, title }, index) => (
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
        ))}
      </ul>
    </section>
  );
};
