import { BrazilMap } from '@components/BrazilMap.component';
import { Container } from '@components/Container.component';
import { SectionHeader } from '@components/SectionHeader.component';
import MachineTypeRowClient from 'src/app/home/components/MachineTypeRowClient';

export const MachineTypeSection = () => {
  return (
    <Container
      as="section"
      className="pt-40 px-[72px] h-home-section"
      customPadding
    >
      <SectionHeader
        title="Tipo de máquina"
        subtitle="Selecione o tipo de equipamento que você precisa"
      />

      <MachineTypeRowClient />
    </Container>
  );
};
