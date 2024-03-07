
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    primary: true,
    size: 'medium',
    label: 'Primary Text',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Text',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Text',
  },
};
export const Disabled: Story = {
  args: {
    label: 'Disabled Text',
    disabled: true,
    backgroundColor: 'gray',
  },
};

// export const Small: Story = {
//   args: {

//     label: 'Small Text',
//   },
// };



// export const Active: Story = {
//   args: {
//     label: 'Active Text',
//     isActive: true,
//     backgroundColor: 'black',
//   },
// };
