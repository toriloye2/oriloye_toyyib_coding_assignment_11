import type { Meta, StoryObj } from '@storybook/react';
import ImageGallery from './Image'; // Adjust the import path based on your file structure

// Define metadata for the stories
const meta: Meta = {
  title: 'Example/Image',
  component: ImageGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Define the type for the story
type ImageGalleryStory = StoryObj<typeof ImageGallery>;

// Define individual stories for different variants of the ImageGallery component
export const Default: ImageGalleryStory = {
  args: {
    images: [
      { src: 'urlimage.jpg', alt: 'First image description' },
      { src: 'url.jpg', alt: 'Second image description' },

    ],
  },
};


