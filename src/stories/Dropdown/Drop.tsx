// import React, { useState } from 'react';
import styled from 'styled-components';
import type { DropProps, HamburgerIconProps } from './Drop.types';
import React, { useState } from 'react';

// Styled component for the dropdown container
const DropdownContainer = styled.div`
  position: relative;
`;

// Styled component for the hamburger icon
const HamburgerIcon = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

// Styled component for the dropdown options
// Styled component for the dropdown options
const DropdownOptions = styled.select<DropProps>`
  /* Add your Dropdown options styles here */
  /* For demonstration, just basic styles */
  background-color: ${(props) => props.backgroundColor || 'white'}; // Use backgroundColor prop
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 4px;
  padding: 8px;
  width: 150px;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')}; /* Disable pointer events if disabled */
  opacity: ${(props) => (props.disabled ? '0.5' : '1')}; /* Reduce opacity if disabled */
`;


// Styled component for the individual option
const Option = styled.option`
  /* Add your Option styles here */
`;

// Icon for closed hamburger
const ClosedHamburgerIcon = ({onClick}: HamburgerIconProps) => (
  <HamburgerIcon onClick={onClick}>☰</HamburgerIcon>
);

// Icon for opened hamburger
const OpenedHamburgerIcon = ({onClick}: HamburgerIconProps) => (
  <HamburgerIcon onClick={onClick} >✖</HamburgerIcon>
);

// Component for the dropdown
const Dropdown: React.FC<DropProps> = ({ borderColor, backgroundColor, disabled }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close

  // Function to toggle dropdown state
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <DropdownContainer>
      {/* Conditional rendering based on dropdown state */}
      {isOpen ? <OpenedHamburgerIcon onClick={toggleDropdown} /> : <ClosedHamburgerIcon onClick={toggleDropdown} />}
      {isOpen && (
        <DropdownOptions borderColor={borderColor} backgroundColor={backgroundColor}> {/* Pass backgroundColor prop */}
          <Option>Home</Option>
          <Option>About</Option>
          <Option>Contact</Option>
          <Option>CV</Option>

        </DropdownOptions>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

