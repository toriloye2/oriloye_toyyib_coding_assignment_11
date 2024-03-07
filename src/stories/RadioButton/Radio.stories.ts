import { Meta, StoryObj } from '@storybook/react';
import  { Radio } from './Radio'; // Import your Radio component here
import { RadioProps } from "./Radio.types";


// Define the RadioProps type
// export type RadioProps = {
//   label: string;
//   value: string;
//   checked?: boolean;
//   disabled?: boolean;
//   color?: string;
//   backgroundColor?: string;
// };

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
export const Default: Story = (args: RadioProps) => <Radio {...} />;


Default.args = {
  label: 'Option 1',
  value: 'option1',
};

export const Checked: Story =  (args: RadioProps) => <Radio {...args}/>;
Checked.args = {
  label: 'Option 2',
  value: 'option2',
  checked: true,
};

export const Disabled: Story =  (args: RadioProps) => <Radio {...args} />;
Disabled.args = {
  label: 'Option 3',
  value: 'option3',
  disabled: true,
};

export const CustomColor: Story = (args: RadioProps)=> <Radio  {...args} />;
CustomColor.args = {
  label: 'Option 4',
  value: 'option4',
  color: 'blue',
};

export const CustomBackgroundColor: Story =  (args: RadioProps) => <Radio {...args} />;
CustomBackgroundColor.args = {
  label: 'Option 5',
  value: 'option5',
  backgroundColor: 'lightgray',
};
export default meta;