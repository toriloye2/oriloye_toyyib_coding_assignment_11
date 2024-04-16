// import React from "react";

// export interface LabelProps {
//   text: string;
//   color?: string;
//   backgroundColor?: string;
//   size?: 'small' | 'medium' | 'large';
//   disabled?: boolean;
// }

// const Label = ({
//   text,
//   color = 'black',
//   backgroundColor,
//   size = 'medium',
//   disabled = false
// }: LabelProps) => {
//   const labelStyle: React.CSSProperties = {
//     color,
//     backgroundColor,
//     fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px',
//     padding: '4px 8px',
//     borderRadius: '4px',
//     opacity: disabled ? 0.5 : 1,
//     pointerEvents: disabled ? 'none' : 'auto',
//   };

//   return <span style={labelStyle}>{text}</span>;
// };

// export default Label;
import React from "react";
import styled from 'styled-components';
import { LabelProps } from "./Label.types";




// const Label = ({
//   text,
//   color = 'black',
//   backgroundColor,
//   size = 'medium',
//   disabled = false,
//   onClick // Destructure onClick from props
// }: LabelProps) => {
//   const labelStyle: React.CSSProperties = {
//     color,
//     backgroundColor,
//     fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px',
//     padding: '4px 8px',
//     borderRadius: '4px',
//     opacity: disabled ? 0.5 : 1,
//     pointerEvents: disabled ? 'none' : 'auto',
//     cursor: onClick ? 'pointer' : 'default', // Change cursor to pointer if onClick is provided
//   };

//   return (
//     <span style={labelStyle} onClick={onClick}>
//       {text}
//     </span>
//   );
// };

const Label = styled.span<LabelProps>`
  color: ${props => props.color || 'black'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  font-size: ${props =>
    props.size === 'small'
      ? '12px'
      : props.size === 'medium'
      ? '16px'
      : '20px'};
  padding: 4px 8px;
  border-radius: 4px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

// Usage:
 <Label text="Your Label Text" onClick={handleClick} />

export default Label;

function handleClick(): void {
  throw new Error("Function not implemented.");
}

