import type { Meta, StoryObj } from '@storybook/react';
import HeaderText from './HeaderText'; // Adjust the import path based on your file structure

// Define metadata for the stories
const meta: Meta = {
  title: 'Example/HeaderText',
  component: HeaderText,
};

export default meta;

// Define the type for the story
type HeaderTextStory = StoryObj<typeof HeaderText>;

// Define individual stories for different variants of the HeaderText component
export const H1: HeaderTextStory = {
  args: {
    text: 'Heading 1',
    level: 'h1',
  },
};

export const H2: HeaderTextStory = {
  args: {
    text: 'Heading 2',
    level: 'h2',
  },
};

export const H3: HeaderTextStory = {
  args: {
    text: 'Heading 3',
    level: 'h3',
  },
};

// Additional stories can be defined similarly for other heading levels or use cases of the HeaderText component
