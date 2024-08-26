// app/home/components/TitleSection.component.tsx
import { Work_Sans } from '@next/font/google';
import { BrazilMap } from '@components/BrazilMap.component';
import { Container } from '@components/Container.component';
import { SectionHeader } from '@components/SectionHeader.component';
import { StateList } from '@components/StateList.component';

export const MapScreenSection = () => {
  return (
    <Container as="section" className="pt-40 h-[952px]">
      <SectionHeader title="Pesquisar por estado" subtitle="ESCOLHA A REGIÃO" />

      <section className="flex justify-center">
        <div className="flex-shrink">
          <BrazilMap />
        </div>
        <div className="flex-shrink">
          <StateList />
        </div>
      </section>
    </Container>
  );
};
