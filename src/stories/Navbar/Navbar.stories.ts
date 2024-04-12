import { StoryObj, Meta } from '@storybook/react';
import NavBar from './Navbar';

// Define metadata for the stories
const meta: Meta = {
  title: 'Example/Navbar',
  component: NavBar,
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
type NavBarStory = StoryObj<typeof NavBar>;

// Define individual stories for different variants of the NavBar component
export const Default: NavBarStory = {
  args: {
    text: 'Default NavBar',
  },
};

export const Colored: NavBarStory = {
  args: {
    text: 'Colored NavBar',
    color: 'blue',
    backgroundColor: 'lightblue',
  },
};

export const Large: NavBarStory = {
  args: {
    text: 'Large NavBar',
    size: 'large',
  },
};

export const Clickable: NavBarStory = {
  args: {
    text: 'Clickable NavBar',
    onClick: () => console.log("NavBar clicked!"),
  },
};

export const Disabled: NavBarStory = {
  args: {
    text: 'Disabled NavBar',
    disabled: true,
    backgroundColor: 'gray',
  },
};
