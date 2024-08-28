import Image from 'next/image';
import React from 'react';

export default function FeaturedCard() {
  return (
    <article className="mx-auto max-w-sm overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative">
        <Image
          src="/path/to/your/image.png" // Substitua pelo caminho da imagem correta
          alt="Descrição do produto"
          width={500}
          height={300}
          className="object-cover"
          priority
        />
        <div className="absolute right-0 top-0 rounded-bl-xl bg-yellow-500 px-3 py-1 text-xs font-bold text-white">
          DESTAQUE
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-500">15/08/2024</p>
        <h3 className="mb-2 text-xl font-bold">Título do post</h3>
        <div className="mb-4">
          <span className="inline-block rounded bg-yellow-500 px-2 py-1 text-xs font-semibold text-white">
            Categoria do produto
          </span>
        </div>
        <p className="text-sm text-gray-700">
          <strong>Estado:</strong>
        </p>
        <p className="mb-4 text-sm text-gray-700">
          <strong>Modelo:</strong>
        </p>
        <p className="text-2xl font-bold text-gray-900">R$ 300,00 / Dia</p>
      </div>
      <div className="p-5">
        <button className="w-full rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600">
          SAIBA MAIS →
        </button>
      </div>
    </article>
  );
}
