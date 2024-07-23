import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  AuthProps,
  CategoriesStore,
  DevicesStore,
  SlidesStore,
  ThemeStore,
  UserResponse,
  UserStore
} from './store.interface';
import {
  addToFavorites,
  fetchCategories,
  fetchDevices,
  fetchSlides,
  searchDevices,
  userLogin,
  userRegistration,
  validateSession
} from '@/services/api';
import { removeFromStorage } from '@/services/auth-token.service';

export const useSlider = create<SlidesStore>((set) => ({
  slides: [],
  loading: true,
  error: null,
  getSlides: async () => {
    try {
      const response = await fetchSlides();
      set({ slides: response });
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
      set({ categories: response });
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  }
}));

export const useTheme = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () => {
        set({ theme: get().theme === 'dark' ? 'light' : 'dark' });
      }
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export const useDevices = create<DevicesStore>((set) => ({
  devices: null,
  foundDevices: [],
  loading: true,
  loadingFoundDevices: true,
  error: null,
  errorFoundDevices: null,
  getDevices: async (
    q?: string,
    category?: string,
    sort?: string,
    limit?: number,
    page?: number
  ) => {
    try {
      const response = await fetchDevices(q, category, sort, limit, page);
      set({ devices: response });
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  },
  searchDevices: async (query: string) => {
    set({ loadingFoundDevices: true });
    try {
      const response = await searchDevices(query);
      set({ foundDevices: response });
    } catch (error) {
      const typedError = error as Error;
      set({ errorFoundDevices: typedError.message });
    } finally {
      set({ loadingFoundDevices: false });
    }
  }
}));

export const useUser = create<UserStore>((set) => ({
  profile: null,
  userFavorites: null,
  loading: true,
  error: null,
  registration: async (auth: AuthProps) => {
    try {
      const response: any = await userRegistration(auth);

      if (response.status !== 200) {
        const message = response.response.data.message || response.response.data.error;
        throw new Error(`${message}`);
      }

      set({ profile: response.data });
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    }
  },
  login: async (email: string, password: string) => {
    try {
      const response: any = await userLogin(email, password);

      if (response.status !== 200) {
        const message = response.response.data.message;
        throw new Error(`${message}`);
      }

      set({ profile: response.data });
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    }
  },
  validateSession: async (refreshToken: string) => {
    try {
      const response: UserResponse = await validateSession(refreshToken);
      if (response.status !== 200) {
        const message = response?.response?.data?.message;
        throw new Error(`${message}`);
      }

      set({ profile: { user: response.data }, userFavorites: response.data.favorites });
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    } finally {
      set({ loading: false });
    }
  },
  userLogOut: async () => {
    set({ profile: null });
    removeFromStorage();
    window.location.replace('/');
  },
  addToFavorites: async (id: number) => {
    try {
      const response: UserResponse = await addToFavorites(id);
      if (response.status !== 200) {
        const message = response?.response?.data?.message;
        throw new Error(`${message}`);
      }
      set({ userFavorites: response.data.favorites });
    } catch (error) {
      const typedError = error as Error;
      set({ error: typedError.message });
    }
  }
}));
