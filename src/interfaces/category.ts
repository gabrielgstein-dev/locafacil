// src/types/Category.ts
export interface Category {
  id: string;
  name: string;
  slug: string;
  qty: number;
  isRoot: boolean;
  isLeaf: boolean;
  children: Category[];
}

export interface CategoryOption {
  value: string;
  label: string;
  level: number;
}
