import ThumbNailsMini from "./ThumbNailsMini";

import placeholder from '../../../../static/pc_midi_logo.png';

export default {
  title: 'UIParts/ThumbNails',
  component: ThumbNailsMini,
}

const Template = (args) => <ThumbNailsMini {...args} />;
export const MiniThumbNail = Template.bind({});
MiniThumbNail.args = {
  postId: 'test-id',
  src: placeholder,
  alt: 'test-alt',
}
