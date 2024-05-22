export interface SlidesProps {
  id: number,
  imgUrl: string;
  link: string;
  altName: string;
}

export interface SlidesStore {
  slides: SlidesProps[];
  loading: boolean;
  error: string | null;
  getSlides: () => void;
}

export interface CategoriesProps {
  id: number;
  link: string;
  name: string;
  imgUrl: string;
  shadowColor: string;
  translate: string;
}

export interface CategoriesStore {
  categories: CategoriesProps[];
  loading: boolean;
  error: string | null;
  getCategories: () => void;
}

export interface ThemeStore {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export interface DevicesProps {
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

export interface FoundDevices {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  price: number;
}

export interface DevicesStore {
  devices: DevicesProps[];
  foundDevices: FoundDevices[];
  loading: boolean;
  loadingFoundDevices: boolean;
  error: string | null;
  errorFoundDevices: string | null;
  getDevices: (category: string) => void;
  searchDevices: (query: string) => void;
}

export interface CollectionProps {
  id: number;
  name: string;
  translate: string;
  link: string;
  imgUrl: string;
}

export interface UserProps {
  user: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
  }
  accessToken?: string;
  refreshToken?: string;
}

export interface UserStore {
  profile: UserProps | null;
  loading: boolean;
  error: string | null;
  registration: (auth: any) => void;
  login: (email: string, password: string) => void;
  validateSession: (accessToken: string) => void;
  userLogOut: () => void;
}