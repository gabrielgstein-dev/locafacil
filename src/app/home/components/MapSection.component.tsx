// app/home/components/TitleSection.component.tsx
import { BrazilMap } from '@components/BrazilMap.component';
import { SectionHeader } from '@components/SectionHeader.component';
import { StateList } from '@components/StateList.component';

export const MapScreenSection = () => {
  return (
    <section className="pb-20 pt-40">
      <SectionHeader title="Pesquisar por estado" subtitle="ESCOLHA A REGIÃO" />

      <section className="flex justify-center">
        <div className="flex-shrink">
          <BrazilMap />
        </div>
        <div className="flex-shrink">
          <StateList />
        </div>
      </section>
    </section>
  );
};
