import { create } from 'zustand';
import axios from 'axios';

export const useSlider = create((set) => ({
  slides: [],
  loading: false,
  error: null,
  getSlides: async () => {
    set({ loading: true });

    try {
      const response: any = await axios.get('http://localhost:3005/slider');
      set({ slides: response })
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  }
}))