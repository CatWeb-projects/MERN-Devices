import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import axios from 'axios';
import { CategoriesStore, SlidesStore, ThemeStore } from './store.interface';

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
  loading: true,
  error: null,
  getCategories: async () => {
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
}));

export const useTheme = create<ThemeStore>()(persist((set, get) => ({
  theme: 'dark',
  toggleTheme: () => {
    set({ theme: get().theme === 'dark' ? 'light' : 'dark'})
  }
}),
{
  name: 'theme',
  storage: createJSONStorage(() => sessionStorage),
}));
