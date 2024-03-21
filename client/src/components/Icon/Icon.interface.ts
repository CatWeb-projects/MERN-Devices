export interface IconInterface {
  className?: string;
  type?: string;
  color?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  [key: string]: any;
}
