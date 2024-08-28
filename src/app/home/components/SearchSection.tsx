// app/home/components/SearchSection.tsx
'use client';
import { useStore } from '@store/useStore';
import { Button } from '@ui/Button';
import Select from '@ui/Select.ui';

export default function SearchSection() {
  const categoryOptions = useStore((state) => state.categoryOptions);
  const estados = [
    { value: 'SP', label: 'São Paulo' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'MG', label: 'Minas Gerais' },
    // Adicione mais estados conforme necessário
  ];

  return (
    <form className="container mx-auto w-full rounded-4xl bg-primary px-12 pb-14 pt-12">
      <fieldset className="flex items-end justify-between gap-7">
        <Select
          label="Estado"
          name="estado"
          options={categoryOptions}
          className="w-full max-w-xs"
        />

        <Select
          label="Categorias"
          name="categories"
          options={categoryOptions}
          className="w-full max-w-xs"
        />

        <Select
          label="Estado"
          name="estado"
          options={categoryOptions}
          className="w-full max-w-xs"
        />

        <Select
          label="Estado"
          name="estado"
          options={categoryOptions}
          className="w-full max-w-xs"
        />

        <Button variant="secondary" size="large">
          Pesquisar
        </Button>
      </fieldset>
    </form>
  );
}
