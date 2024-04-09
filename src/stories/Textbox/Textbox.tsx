// import React, { useState } from "react";
// import styled from 'styled-components';
// import type { TextProps } from "./Text.types";

// const BaseText = ({
//   content,
//   ...props
// }: TextProps) => {
//   return (
//     <p
//       className={['storybook-text'].join(' ')}
//       style={{ color: props.color }}
//       {...props}
//     >
//       {content}
//     </p>
//   );
// };

// const StyledText = styled.p`
//   color: ${(props) => props.color || 'black'};
//   font-size: var(--font-size, 16px); // Default size
//   cursor: pointer;
// `;

// export const Text = ({
//   preferredSizes = ['small', 'medium', 'large'],
//   color = 'black',
//   content,
//   ...props
// }: TextProps) => {
//   const [sizeIndex, setSizeIndex] = useState(0);

//   const handleClick = () => {
//     setSizeIndex((prevIndex) => (prevIndex + 1) % preferredSizes.length);
//   };

//   const size = preferredSizes[sizeIndex];

//   return (
//     <StyledText
//       color={color}
//       style={{ fontSize: size === 'small' ? '12px' : size === 'large' ? '20px' : '16px' }}
//       onClick={handleClick}
//       {...props}
//     >
//       {content}
//     </StyledText>
//   );
// };
import React, { useState } from "react";
import styled from 'styled-components';
import type { TextProps } from "./Textbox.types";


const StyledText = styled.p<{ color: string }>` // Adjust the styled component definition
  color: ${(props) => props.color || 'black'};
  font-size: var(--font-size, 16px);
  cursor: pointer;
`;

export const Text = ({
  preferredSizes = ['small', 'medium', 'large'],
  color = 'black',
  content,
  ...props
}: TextProps) => {
  const [sizeIndex, setSizeIndex] = useState(0);

  const handleClick = () => {
    setSizeIndex((prevIndex) => (prevIndex + 1) % preferredSizes.length);
  };

  const size = preferredSizes[sizeIndex];

  return (
    <StyledText
      color={color}
      style={{ fontSize: size === 'small' ? '12px' : size === 'large' ? '20px' : '16px' }}
      onClick={handleClick}
      {...props}
    >
      {content}
    </StyledText>
  );
};
