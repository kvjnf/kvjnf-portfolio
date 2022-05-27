import Header from "./Header";

export default {
  title: 'Container/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});
