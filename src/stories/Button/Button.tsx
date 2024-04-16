import React from "react";
//import styled from "styled-components";
import type { ButtonProps } from "./Button.types";
import { SizeMap } from "./Button.types";

const sizeMap: SizeMap = {
  small: '30px',
  medium: '50px',
  large: '70px',
};

const BUTTON_PADDING = 10; // Define padding around the text content within the button


export const Button = ({
  primary = false,
  size = 'medium', // Default size
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps & { size?: keyof SizeMap }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  // Calculate button width based on text length and padding
  const buttonWidth = `${label.length * 10 + BUTTON_PADDING}px`; // Adjust multiplier as needed

  // Set button style dynamically
  const buttonStyle = {
    backgroundColor,
    width: buttonWidth,
    height: sizeMap[size], // Set height based on size prop
    padding: `${BUTTON_PADDING}px`, // Apply padding
  };

  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

// import React from "react";
// import styled from "styled-components";
// import type { ButtonProps } from "./Button.types";
// import { StyledButtonProps ,SizeMap } from "./Button.types";


// const sizeMap: SizeMap = {
//   small: '30px',
//   medium: '50px',
//   large: '70px',
// };

// const BUTTON_PADDING = 10; // Define padding around the text content within the button





// const StyledButton = styled.button<StyledButtonProps>`
//   background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
//   border: none;
//   color: ${({ primary }) => (primary ? 'white' : 'black')};
//   padding: ${BUTTON_PADDING}px;
//   width: ${({ label }) => `${(label ? label.length * 10 : 0) + BUTTON_PADDING}px`};
//   height: ${({ size }) => sizeMap[size || 'medium']};
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || 'rgba(66, 62, 62, 1)'};
//   }
// `;

// const Button = ({
//   primary = false,
//   size = 'medium', // Default size
//   backgroundColor,
//   label,
//   onClick,
//   ...props
// }: ButtonProps & { size?: keyof SizeMap }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

//   return (
//     <StyledButton
//       type="button"
//       className={['storybook-button', mode].join(' ')}
//       backgroundColor={backgroundColor}
//       primary={primary}
//       size={size}
//       onClick={onClick}
//       {...props}
//     >
//       {label}
//     </StyledButton>
//   );
// };

// export default Button;
