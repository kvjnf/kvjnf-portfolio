import BlankLinkBtn from "./BlankLinkBtn";
import BlankLinkHoverBtn from "./BlankLinkHoverBtn";

export default {
  title: 'UIParts/Buttons/OuterLink',
  component: BlankLinkBtn,
}

const Template = (args) => <BlankLinkBtn {...args} />
export const Base = Template.bind({});
Base.args = {
  link: '//google.com',
  text: 'Link To Google.com'
}

export const DefaultFont = Template.bind({});
DefaultFont.args = {
  ...Base.args,
  fontStyle: 'default'
}

const Templage2 = (args) => <BlankLinkHoverBtn {...args} />
export const HoverFill = Templage2.bind({});
HoverFill.args = {
  ...Base.args
}

export const HoverFillArrow = Templage2.bind({});
HoverFillArrow.args = {
  ...Base.args,
  isArrow: true
}
