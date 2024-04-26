import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import axios from 'axios';
import { CategoriesStore, DevicesStore, SlidesStore, ThemeStore } from './store.interface';
import { fetchCategories, fetchDevices, searchDevices } from '@/services/api';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

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
      const response = await fetchCategories();
      set({ categories: response })
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
  foundDevices: [],
  loading: true,
  loadingFoundDevices: true,
  error: null,
  errorFoundDevices: null,
  getDevices: async (category: string) => {
    try {
      const response = await fetchDevices(category)
      set({ devices: response})
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  },
  searchDevices: async (query: string) => {
    // set({ loadingFoundDevices: true });
    
    try {
      const response = await searchDevices(query)
      set({ foundDevices: response})
    } catch(error) {
      const typedError = error as Error;
      set({ errorFoundDevices: typedError.message });
    } finally {
      set({ loadingFoundDevices: false });
    }
  },
}));
