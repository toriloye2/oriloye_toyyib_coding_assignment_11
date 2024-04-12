import React, { useState } from "react";
import styled from 'styled-components';
import type { TextBoxProps } from "./Textbox.types"; // Assuming you have defined TextBoxProps in TextBox.types

const StyledTextBox = styled.input<{ color: string }>` // Adjust the styled component definition for input
  color: ${(props) => props.color || 'black'};
  font-size: var(--font-size, 16px);
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextBox = ({
  preferredSizes = ['small', 'medium', 'large'],
  color = 'black',
  content,
  ...props
}: TextBoxProps) => {
  const [sizeIndex, setSizeIndex] = useState(0);

  const handleClick = () => {
    setSizeIndex((prevIndex) => (prevIndex + 1) % preferredSizes.length);
  };

  const size = preferredSizes[sizeIndex];
  const sizePx = size === 'small' ? '12px' : size === 'large' ? '20px' : '16px';
const fontSize = typeof sizePx === 'string' ? sizePx : '16px'; // Fallback to default if sizePx is not a string

return (
  <StyledTextBox
    type="text"
    color={color}
    style={{ fontSize }}
    onClick={handleClick}
    disabled={ props.disabled }
    onChange={ props.onChange }
  />
);
};
