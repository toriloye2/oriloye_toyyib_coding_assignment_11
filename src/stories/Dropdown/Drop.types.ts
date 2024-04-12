// export type DropProps = {
//   backgroundColor?: string;
//   fontColor?: string;
//   borderColor?: string;
//   isOpen?: boolean; // New prop for the open/closed state
//   hamburgerMenu?: boolean; // New prop for the hamburger menu style
//   disable?: boolean;

// }
export type DropProps = {
  backgroundColor?: string;
  fontColor?: string;
  borderColor?: string;
  isOpen?: boolean; // New prop for the open/closed state
  hamburgerMenu?: boolean; // New prop for the hamburger menu style
  disable?: boolean; // New prop for disabling the dropdown interaction
};

export type HamburgerIconProps = { onClick: () => void }