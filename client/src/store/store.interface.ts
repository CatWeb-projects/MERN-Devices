export interface SlidesData {
  id: number,
  imgUrl: string;
  link: string;
  altName: string;
}

export interface SlidesStore {
  slides: SlidesData[];
  loading: boolean;
  error: string | null;
  getSlides: () => void;
}

export interface CategoriesData {
  id: number;
  link: string;
  name: string;
  imgUrl: string;
  shadowColor: string;
  translate: string;
}

export interface CategoriesStore {
  categories: CategoriesData[];
  loading: boolean;
  error: string | null;
  getCategories: () => void;
}

export interface ThemeStore {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}