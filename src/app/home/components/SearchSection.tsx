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
    <form className="w-full bg-primary pt-12 pb-14 px-9 rounded-4xl">
      <fieldset className="flex justify-between items-end">
        <Select
          label="Estado"
          name="estado"
          options={categoryOptions}
          className="max-w-xs w-72"
        />

        <Select
          label="Categorias"
          name="categories"
          options={categoryOptions}
          className="max-w-xs w-full"
        />

        <Select
          label="Estado"
          name="estado"
          options={categoryOptions}
          className="max-w-xs w-full"
        />

        <Select
          label="Estado"
          name="estado"
          options={categoryOptions}
          className="max-w-xs w-full"
        />

        <Button variant="secondary" size="large">
          Pesquisar
        </Button>
      </fieldset>
    </form>
  );
}
