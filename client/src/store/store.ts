import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import axios from 'axios';
import { CategoriesStore, DevicesStore, SlidesStore, ThemeStore } from './store.interface';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3200/api';

export const useSlider = create<SlidesStore>((set) => ({
  slides: [],
  loading: true,
  error: null,
  getSlides: async () => {
    try {
      const response = await axios.get('/sliders');
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
  storage: createJSONStorage(() => localStorage),
}));

export const useDevices = create<DevicesStore>((set) => ({
  devices: [],
  loading: true,
  error: null,
  getDevices: async (type: string) => {
    try {
      const response = await axios.get('/devices', {
        ...(type ? { params: { type } } : {})
      })
      set({ devices: response.data})
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  }
}))