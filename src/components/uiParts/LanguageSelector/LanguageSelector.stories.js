import { PureLangageSelector } from "./LanguageSelector";

export default {
  title: 'UIParts/LanguageSelector',
  component: PureLangageSelector,
}

const Template = (args) => (<PureLangageSelector {...args} />);
export const Default = Template.bind({});
Default.args = {
  lang: 'jp'
}