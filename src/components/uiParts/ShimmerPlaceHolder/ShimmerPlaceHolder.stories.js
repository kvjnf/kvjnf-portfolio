import ShimmerPlaceholder from "./ShimmerPlaceHolder";

export default {
  title: 'UIParts/Placeholder',
  component: ShimmerPlaceholder,
  argTypes: {
    lightest: { control: 'color' },
    darkest: { control: 'color' },
  },
}

const Template = (args) => <ShimmerPlaceholder {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 400,
  height: 400,
}
