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

export interface DevicesData {
  [key: string]: any;
  id: number;
  name: string;
  email?: string;
  price: number;
  credit?: number;
  cashback?: number;
  model: string;
  color: string;
  weight: number;
  popularity: number;
  manufacturer: string;
  imageUrl: string;
  type: string;
  link: string;
  colors: string[];
  memoryOptions: number[];
  camera?: number;
  frontCamera?: number;
  chipset?: string;
  resolution?: string;
  hardDrive?: number;
  memory?: number;
  cores?: number;
  chipsetFrequency?: string;
  segment?: string;
  display?: string;
  displayType?: string;
  videoCard?: string;
  videoCardMemory?: string;
  touchScreen?: boolean;
  chargingTime?: number;
  workingTimeDays?: number;
  workingTimeHours?: number;
  batteryCapacity?: number;
  bluetooth?: number;
  power?: number | string;
  workingDistance?: number;
  audioFrequency?: string;
  audioFormats?: string[];
  usbConnectors?: number;
  hdmi?: number;
  interface?: string[];
  material: string | string[];
  supportedWeight: number;
  maxSpeed: number;
  batteryType: string;
  errorRange: string;
  measurementLevel: string;
  sensitivity: number;
  impendance: number;
  connectionType: string;
  wireLength: number;
  microphone: boolean;
  coldAir: boolean;
  temperatureLevels: number;
  gears: number;
  dimensions: string;
  releaseDate: number;
  wheelDiameter: number;
  speedsNumber: number;
  brakeType: string;
  rimMaterial: string;
  frameMaterial: string;
  frameDiameter: number;
  memoryCard: string[];
  diaphragm: string;
  focalDistance: string;
  opticalZoom: number;
  refreshRate: string;
}

export interface DevicesStore {
  devices: DevicesData[];
  loading: boolean;
  error: string | null;
  getDevices: (type: string) => void;
}