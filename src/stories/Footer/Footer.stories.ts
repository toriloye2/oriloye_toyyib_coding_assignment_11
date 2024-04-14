import Footer from './Footer';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  argTypes: {
    copyrightText: { control: 'text' }, // Allow customization of copyright text
    socialLinks: { control: { type: 'object' }, table: { defaultValue: [] } }, // Allow customization of social links (optional)
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {}, // No arguments for the default story
// };

export const WithCustomCopyright: Story = {
  args: {
    copyrightText: '© 2025 Oriloye Toyyib', // Override the default copyright text
  },
};

export const WithSocialLinks: Story = {
  args: {
    socialLinks: [
      {
        icon: 'fa fa-envelope',
        url: 'mailto:taiyeolabamiji@gmail.com',
        label: 'Email',
      },
      {
        icon: 'fa fa-github', // GitHub icon
        url: 'https://github.com/toriloye2', // Replace with your GitHub URL
        label: 'GitHub',
      },
      {
        icon: 'fa fa-twitter', // Twitter icon
        url: 'https://twitter.com/your-twitter-handle', // Replace with your Twitter URL
        label: 'Twitter',
      },
      {
        icon: 'fa fa-instagram', // Twitter icon
        url: 'https://instagram.com/your-twitter-handle', // Replace with your Twitter URL
        label: 'Instagram',
      },
    ],
  },
};

// Add more stories to showcase different variations of your footer
