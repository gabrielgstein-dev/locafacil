// app/home/page.tsx

import { MachineTypeSection } from './components/MachineTypeSection.component';
import { MapScreenSection } from './components/MapSection.component';
import { TitleSection } from './components/TitleSection.component';

export default function HomePage() {
  return (
    <div>
      <TitleSection />
      <MapScreenSection />
      <MachineTypeSection />
    </div>
  );
}
