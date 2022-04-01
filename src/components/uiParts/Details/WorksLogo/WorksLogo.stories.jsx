import WorksLogo from "./WorksLogo";

import placeholder from '../../../../static/pc_midi_logo.png';

export default {
  title: 'UIParts/WorksLogo',
  component: WorksLogo
}

const Template = (args) => <WorksLogo {...args} />
export const Default = Template.bind({});
Default.args = {
  src: placeholder,
  alt: 'test'
}
