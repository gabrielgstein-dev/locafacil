// app/home/components/TitleSection.component.tsx

import { Work_Sans } from '@next/font/google';
import Image from 'next/image';
import { Button } from 'src/components/ui/Button';
import SearchSection from './SearchSection';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const TitleSection = () => {
  return (
    <section className="relative h-home-section">
      <Image
        src="/locafacil-maquinas-background.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={60}
        priority
        className="z-[-1]"
      />
      <div className="container mx-auto flex w-full items-center justify-between px-8">
        <div className="pt-16">
          <h1 className="pb-6 text-base text-white">Bem-vindo à Loca Fácil!</h1>
          <h2
            className={`pb-9 text-big-title font-bold text-white ${workSans.className}`}
          >
            Aluguel de Máquinas
          </h2>
          <h3 className="pb-10 text-2xl text-white">
            Encontre e alugue tratores, escavadeiras, caminhões e mais em todo o
            Brasil. Cadastre seu veículo e conecte-se com clientes. Alugue com
            facilidade e segurança.
          </h3>
          <div>
            <Button
              size="medium"
              className="mr-7"
              aria-label="Pesquisar máquinas para aluguel"
            >
              Pesquisar
            </Button>
            <Button
              variant="outlined"
              className="text-white"
              aria-label="Cadastrar novo veículo para aluguel"
            >
              Cadastrar
            </Button>
          </div>
        </div>
        <div className="relative h-[651px] w-full">
          <Image
            src="/bulldozer-amarelo.png"
            alt="Escavadeira Amarela CAT Aluguel de Máquinas Pesadas"
            fill
            style={{ objectFit: 'contain' }}
            quality={75}
            priority
          />
        </div>
      </div>

      <section className="mt-[44px] px-8">
        <SearchSection />
      </section>
    </section>
  );
};
