import StyledHeader2 from "./SectionHeader2";

export default {
  title: 'UIParts/Header/SectionHeader2',
  component: StyledHeader2  
}

const Template = (args) => <StyledHeader2 {...args}/>
export const Default = Template.bind({});
Default.args = {
  text: 'ABOUT ME'
}