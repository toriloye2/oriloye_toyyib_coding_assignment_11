import { Meta, StoryObj } from '@storybook/react';
import Card from './Card'; // Import Card and CardProps
import { CardProps } from './Card.types';

// Define metadata for the stories
const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
};

export default meta;

// Define the type for the story (using the imported CardProps)
type CardStory = StoryObj<CardProps>;

// Define individual stories for different variants of the Card component
export const Basic: CardStory = {
  args: {
    title: 'Card Title',
    description: 'This is a basic card with a title and description.',
    backgroundColor: 'pink'
  },
};

export const Disabled: CardStory = {
  args: {
    title: 'Card Title',
    description: 'This is a basic card with a title and description.',
   // backgroundColor: 'grey',
    disable: true,
  },
};



