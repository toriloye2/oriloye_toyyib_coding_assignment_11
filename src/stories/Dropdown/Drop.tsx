// import React, { useState } from 'react';
import styled from 'styled-components';
import { DropProps } from './Drop.types';
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
const DropdownOptions = styled.select<DropProps>`
  /* Add your Dropdown options styles here */
  /* For demonstration, just basic styles */
  background-color: white;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 4px;
  padding: 8px;
  width: 150px;
`;

// Styled component for the individual option
const Option = styled.option`
  /* Add your Option styles here */
`;

// Icon for closed hamburger
const ClosedHamburgerIcon = () => (
  <HamburgerIcon>☰</HamburgerIcon>
);

// Icon for opened hamburger
const OpenedHamburgerIcon = () => (
  <HamburgerIcon>✖</HamburgerIcon>
);

// Component for the dropdown
const Dropdown: React.FC<DropProps> = ({ borderColor }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close

  // Function to toggle dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      {/* Conditional rendering based on dropdown state */}
      {isOpen ? <OpenedHamburgerIcon onClick={toggleDropdown} /> : <ClosedHamburgerIcon onClick={toggleDropdown} />}
      {isOpen && (
        <DropdownOptions borderColor={borderColor}>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
        </DropdownOptions>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

