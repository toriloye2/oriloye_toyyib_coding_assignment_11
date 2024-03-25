import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import Drop from "./Drop";

// Define styled components for the dropdown elements
const StyledDrop = styled(Drop)`
  /* Add your styles for the dropdown container here */
`;

// Define metadata for the stories
const meta: Meta = {
  title: "Example/Dropdown",
  component: StyledDrop,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
};

export default meta;

// Define the type for the story
type DropStory = StoryObj<typeof StyledDrop>;

// Story for dropdown before clicked (closed)
export const BeforeClicked: DropStory = {
  args: {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
    borderColor: "#cccccc",
    isOpen: false, // Set isOpen to false for closed state
  },
};

// Story for dropdown after clicked (open)
export const AfterClicked: DropStory = {
  args: {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
    borderColor: "#cccccc",
    isOpen: true, // Set isOpen to true for open state
  },
};

// Story for dropdown with hamburger menu style
export const HamburgerMenu: DropStory = {
  args: {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
    borderColor: "#cccccc",
    isOpen: false, // Set isOpen to false for closed state
    hamburgerMenu: true, // Add hamburgerMenu prop
  },
};
