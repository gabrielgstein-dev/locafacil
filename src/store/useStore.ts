import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchCategories } from '@api/category.service';
import { Category, CategoryOption } from '@interfaces/category';

interface StoreState {
  categories: Category[];
  categoryOptions: CategoryOption[];
  fetchCategories: () => Promise<void>;
}

function buildOptions(categories: Category[], level = 0): CategoryOption[] {
  return categories.flatMap((category) => {
    const option = {
      value: category.id,
      label: `${category.name} (${category.qty})`,
      level,
    };
    return [option, ...buildOptions(category.children, level + 1)];
  });
}

export const useStore = create<StoreState>()(
  devtools((set) => ({
    categories: [],
    categoryOptions: [],
    fetchCategories: async () => {
      const response = await fetchCategories();

      const categoryOptions = buildOptions(response);

      set({ categories: response, categoryOptions });
    },
  })),
);

useStore.getState().fetchCategories();
