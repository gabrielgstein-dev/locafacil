import Image from 'next/image';

export function Slider() {
  const sliderItens = [
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
    {
      imageUrl: '/slider-default.svg',
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-center text-6xl font-black text-gray-light after:mx-auto after:mt-3 after:block after:h-1.5 after:w-32 after:bg-primary after:content-['']">
        Pesquisar por Marcas
      </h2>
      <p className="mt-5 text-center text-3xl">Selecione a marca do veículo</p>
      <div className="container mx-auto overflow-hidden">
        <ul className="mx-auto mt-14 flex animate-scroll justify-center">
          {sliderItens.map(({ imageUrl }, index) => (
            <div
              className="relative h-14 w-80 flex-none justify-center"
              key={`Item - ${index}`}
            >
              <Image
                loading="eager"
                fill
                alt=""
                className="px-10"
                src={imageUrl}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
