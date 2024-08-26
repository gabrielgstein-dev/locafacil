import './globals.css';
import { Roboto } from '@next/font/google';
import { ReactNode } from 'react';
import CenterLayout from '@components/CenterLayout.component';
import withPageTracking from '@components/PageTracking.hoc';
import PageTracking from '@components/PageTracking.hoc';
import Footer from 'src/components/Footer.component';
import Header from 'src/components/Header.component';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <head>
        <title>Loca Fácil | Aluguel de Máquinas Pesadas</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.locafacil.com" />
        <meta
          name="description"
          content="Alugue tratores, escavadeiras, caminhões e mais em todo o Brasil."
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Loca Fácil | Aluguel de Máquinas Pesadas"
        />
        <meta
          property="og:description"
          content="Alugue tratores, escavadeiras, caminhões e mais em todo o Brasil."
        />
        <meta
          property="og:image"
          content="https://www.locafacil.com/images/thumbnail.jpg"
        />
        <meta property="og:url" content="https://www.locafacil.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Loca Fácil | Aluguel de Máquinas Pesadas"
        />
        <meta
          name="twitter:description"
          content="Alugue tratores, escavadeiras, caminhões e mais em todo o Brasil."
        />
        <meta
          name="twitter:image"
          content="https://www.locafacil.com/images/thumbnail.jpg"
        />
      </head>
      <body>
        <PageTracking>
          <CenterLayout>
            <Header />
            <main>{children}</main>
            <Footer />
          </CenterLayout>
        </PageTracking>
      </body>
    </html>
  );
};

export default RootLayout;
