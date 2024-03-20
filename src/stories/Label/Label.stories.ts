import type { Meta,  StoryObj } from '@storybook/react';
import  Label  from './Label';

// Define metadata for the stories
const meta: Meta = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;

// Define the type for the story
type LabelStory = StoryObj<typeof Label>;

// Define individual stories for different variants of the label component
export const Default: LabelStory = {
  args: {
    text: 'Default Label',
  },
};

export const Colored: LabelStory = {
  args: {
    text: 'Colored Label',
    color: 'blue',
    backgroundColor: 'lightblue',
  },
};

export const Large: LabelStory = {
  args: {
    text: 'Large Label',
    size: 'large',
  },
};

export const Clickable: LabelStory = {
  args: {
    text: 'Clickable Label',
    onClick: () => console.log("Label clicked!"),
  },
};

export const Disabled: LabelStory = {
  args: {
    text: 'Disabled Label',
    disabled: true,
    backgroundColor: 'gray',
  },
};
