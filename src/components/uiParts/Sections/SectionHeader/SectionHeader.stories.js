import SectionHeader from "./SectionHeader";

export default {
  title: 'UIParts/Sections',
  component: SectionHeader
}

const Template = (args) => <SectionHeader {...args} />;
export const Header = Template.bind({});
Header.args = {
  title: 'Example Title',
}
