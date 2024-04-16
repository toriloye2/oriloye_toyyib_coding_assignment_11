export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;

  hoverBackgroundColor?: string;
  /**
   * How large should the button be?
   * @default 'medium'
   */
  size?: keyof SizeMap;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

export type SizeMap ={
  small: string;
  medium: string;
  large: string;
}
 export type StyledButtonProps= {
  size?: keyof SizeMap;
  primary?: boolean;
  backgroundColor?: string;
  hoverBackgroundColor?: string; // Add hoverBackgroundColor prop
}