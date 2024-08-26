// app/home/components/TitleSection.component.tsx
import { Work_Sans } from '@next/font/google';
import Image from 'next/image';
import SearchSection from './SearchSection';
import { Container } from '@components/Container.component';
import { Button } from 'src/components/ui/Button';

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
      <Container className="flex justify-between items-center w-full">
        <div className="pt-16">
          <h1 className="text-base text-white pb-6">Bem-vindo à Loca Fácil!</h1>
          <h2
            className={`pb-9 font-bold text-big-title text-white ${workSans.className}`}
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
        <div className="h-[651px] w-full relative">
          <Image
            src="/bulldozer-amarelo.png"
            alt="Escavadeira Amarela CAT Aluguel de Máquinas Pesadas"
            fill
            style={{ objectFit: 'contain' }}
            quality={75}
            priority
          />
        </div>
      </Container>

      <Container as="section" customPadding className="px-40 mt-[44px]">
        <SearchSection />
      </Container>
    </section>
  );
};
