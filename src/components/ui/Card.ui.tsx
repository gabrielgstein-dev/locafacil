import Image from 'next/image';
import React from 'react';

export default function FeaturedCard() {
  return (
    <article className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src="/path/to/your/image.png" // Substitua pelo caminho da imagem correta
          alt="Descrição do produto"
          width={500}
          height={300}
          className="object-cover"
          priority
        />
        <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
          DESTAQUE
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-500 text-xs">15/08/2024</p>
        <h3 className="text-xl font-bold mb-2">Título do post</h3>
        <div className="mb-4">
          <span className="inline-block bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Categoria do produto
          </span>
        </div>
        <p className="text-gray-700 text-sm">
          <strong>Estado:</strong>
        </p>
        <p className="text-gray-700 text-sm mb-4">
          <strong>Modelo:</strong>
        </p>
        <p className="text-2xl font-bold text-gray-900">R$ 300,00 / Dia</p>
      </div>
      <div className="p-5">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-full transition-colors">
          SAIBA MAIS →
        </button>
      </div>
    </article>
  );
}
