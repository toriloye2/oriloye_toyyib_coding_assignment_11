export type TextBoxProps = {
  content?: string; // Retain the content property
  value?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  preferredSizes?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
