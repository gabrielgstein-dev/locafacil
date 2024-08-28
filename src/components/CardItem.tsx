import Image from 'next/image';
import Link from 'next/link';

export type CardItemParams = {
  alt: string;
  src: string;
  href: string;
  state: string;
  model: string;
  title: string;
  price: string;
};

export function CardItem({
  alt,
  src,
  href,
  model,
  state,
  price,
  title,
}: CardItemParams) {
  return (
    <li>
      <div className="h-[620px] w-96 rounded-2xl bg-white p-4 shadow-md">
        <div className="relative mx-auto h-64 w-full">
          <Image alt={alt} src={src} fill quality={100} />
        </div>

        <div className="mt-2.5 flex flex-col gap-2.5">
          <p>15/08/2024</p>
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="w-fit rounded-full bg-[#FDB900] px-3.5 py-1">
            Categoria do produto
          </span>
          <p>Estado: {state} </p>
          <p>Modelo: {model}</p>
          <div className="flex items-center justify-center gap-1 py-2.5">
            <span className="text-sm">R$</span>
            <span className="text-3xl font-bold">{price} / Dia</span>
          </div>
          <Link
            href={href}
            className="mx-auto mt-2.5 block w-full rounded-lg bg-primary py-3 text-center uppercase text-white transition-colors hover:brightness-75"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </li>
  );
}
