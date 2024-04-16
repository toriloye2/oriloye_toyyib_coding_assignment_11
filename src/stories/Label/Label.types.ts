
export type LabelProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void; // Add onClick handler prop
}