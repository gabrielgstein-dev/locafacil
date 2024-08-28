import { Button } from '@ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-8">
        <div>
          <Link href="/" aria-label="Loca Fácil - Página Inicial">
            <Image
              src="/loca-facil-aluguel-maquinas-logo.svg"
              alt="Loca Fácil - Aluguel de Máquinas Pesadas"
              width={154}
              height={54}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-12">
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-default hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-semibold text-gray-default hover:text-primary"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-semibold text-gray-default hover:text-primary"
              >
                Nossos carros
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-semibold text-gray-default hover:text-primary"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-semibold text-gray-default hover:text-primary"
              >
                Paginas
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-semibold text-gray-default hover:text-primary"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/register" passHref>
            <Button uppercase={false} variant="primary" size="medium">
              Anunciar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
