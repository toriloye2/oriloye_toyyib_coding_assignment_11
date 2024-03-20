import { Meta, StoryObj } from '@storybook/react';
import  { Radio } from './Radio'; // Import your Radio component here
import { RadioProps } from "./Radio.types";

// Meta information about the component
const meta: Meta = {
  title: 'Example/Radio', // Title for your story
  component: Radio, // The component you are documenting
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Storybook canvas
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }, // Define controls for your props
    color: { control: 'color' },
  },
};



// Define a StoryObj type for your component
type Story = StoryObj<RadioProps>;

// Define your stories
export const Default: Story ={
  args: {
    label: 'Option 1',
    value: 'option1',
  }
};

export const Checked: Story = {
args: {
  label: 'Option 2',
  value: 'option2',
  checked: true,
}
};
export const Disabled: Story = {
args: {
  label: 'Option 3',
  value: 'option3',
  disabled: true,
}
};
export default meta;