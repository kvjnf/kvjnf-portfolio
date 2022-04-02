import FadeIn from "./FadeIn";
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import { Default as LazyParams } from '../LazyLoadImage/LazyLoadImage.stories';

export default {
  title: 'UIParts/Animation/FadeIn',
  component: FadeIn,
}

const Template = (args) => <FadeIn {...args} />
export const Default = Template.bind({});
Default.args = {
  children: <LazyLoadImage {...LazyParams.args} />
}

export const FadeInDown = Template.bind({});
FadeInDown.args = {
  ...Default.args,
  yOffset: -40
}
