// src/api/categoryService.ts
import { type Category } from '../interfaces/category';

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch('http://localhost:3030/api/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
