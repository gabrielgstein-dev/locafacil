import Image from 'next/image';
import Link from 'next/link';

// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative border-t bg-[#131313] text-white">
      <div className="container mx-auto flex h-[564px] justify-between pt-[74px]">
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
            <p className="pb-[55px] text-3xl font-semibold text-primary">
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
            <p className="pb-[55px] text-3xl font-semibold text-primary">
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
      </div>

      <div className="absolute bottom-0 w-full border-t border-[#636363] pb-10 pt-7 text-center">
        <p className="text-[#636363]">
          Todos os direitos reservados. Desenvolvido por i9ty.com
        </p>
      </div>
    </footer>
  );
}
