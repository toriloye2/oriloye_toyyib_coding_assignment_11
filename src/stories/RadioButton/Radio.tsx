
// import React from "react";
// import { RadioProps } from "./Radio.types";

// /**
//  * Component for radio button
//  */
// export const Radio = ({
//   label,
//   value,
//   checked = false,
//   disabled = false,
//   ...props
// }: RadioProps) => {
//   return (
//     <label>
//       <input
//         type="radio"
//         value={value}
//         checked={checked}
//         disabled={disabled}
//         {...props}
//       />
//       {label}
//     </label>
//   );
// };
import React from "react";
import styled from 'styled-components';
import { RadioProps } from "./Radio.types";

// Styled component for the radio button wrapper
const RadioWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

/**
 * Component for radio button
 */
export const Radio = ({
  label,
  value,
  checked = false,
  disabled = false,
  backgroundColor, // Add backgroundColor prop
  ...props
}: RadioProps & { backgroundColor?: string }) => {
  return (
    <RadioWrapper backgroundColor={backgroundColor}> {/* Pass backgroundColor prop to the wrapper */}
      <label>
        <input
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        {label}
      </label>
    </RadioWrapper>
  );
};
