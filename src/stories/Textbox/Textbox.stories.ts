import type { Meta, StoryObj } from '@storybook/react';
import { TextBox } from './Textbox'; // Assuming TextBox is the component you want to use

const meta: Meta = {
  title: 'Example/TextBox', // Change the title to match the component being tested
  component: TextBox, // Change the component to TextBox
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type TextBoxStory = StoryObj<typeof TextBox>; // Change Text to TextBox

export const Default: TextBoxStory = {
  args: {
    content: 'Default Text',
    size: 'medium',
  },
};

export const Small: TextBoxStory = {
  args: {
    content: 'Small Text',
    size: 'small',
  },
};

export const Large: TextBoxStory = {
  args: {
    content: 'Large Text',
    size: 'large',
  },
};

export const Disabled: TextBoxStory = {
  args: {
    content: 'Disabled Text',
    disabled: true,
    color: 'gray',
  },
};
