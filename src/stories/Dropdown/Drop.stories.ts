import Dropdown from "./Drop";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
}

const Template = (args) => <Drop {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  backgroundColor: "#02ff43",
  fontColor: "black",
  borderColor: "#008cff",
  disable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    backgroundColor: "darkgrey",
    fontColor: "white",
    borderColor: "darkgrey",
    disable: true,
};