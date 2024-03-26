import { create } from 'zustand';
import axios from 'axios';
import { CategoriesStore, SlidesStore } from './store.interface';

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:3200';

export const useSlider = create<SlidesStore>((set) => ({
  slides: [],
  loading: true,
  error: null,
  getSlides: async () => {
    try {
      const response = await axios.get('/slider');
      set({ slides: response.data })
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  }
}));

export const useCategories = create<CategoriesStore>((set) => ({
  categories: [],
  loading: false,
  error: null,
  getCategories: async () => {
    set({ loading: true });

    try {
      const response = await axios.get('/categories');
      set({ categories: response.data })
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  }
}))