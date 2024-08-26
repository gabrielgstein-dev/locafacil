import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container.component';

// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative border-t bg-[#131313] text-white">
      <Container className="h-[564px] pt-[74px] flex justify-between">
        <div className="w-[330px]">
          <div className="flex">
            <Link href="/" aria-label="Loca Fácil - Página Inicial">
              <Image
                src="/key-loca-facil-logo.svg"
                alt="Loca Fácil - Aluguel de Máquinas Pesadas"
                width={32}
                height={71}
              />
            </Link>
            <span className="pl-3 text-4xl font-semibold">Loca Fácil</span>
          </div>

          <p className="pt-[43px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            porttitor quam nisi, ac sodales lorem placerat venenatis.
          </p>
        </div>

        <div className="flex w-7/12">
          <div className="w-7/12">
            <p className="pb-[55px] text-primary font-semibold text-3xl">
              Quicklink
            </p>
            <ul>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Home page
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  About Us
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Cars Catalog
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  FAQ
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-7/12">
            <p className="pb-[55px] text-primary font-semibold text-3xl">
              Services
            </p>
            <ul>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Business Rental
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Airport Transfer
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Travel Rental
                </a>
              </li>
              <li className="mb-[15px]">
                <a className="text-[18px] font-semibold" href="/terms">
                  Luxury Rental
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 border-t w-full text-center pt-7 pb-10 border-[#636363]">
        <p className="text-[#636363]">
          Todos os direitos reservados. Desenvolvido por i9ty.com
        </p>
      </div>
    </footer>
  );
}
