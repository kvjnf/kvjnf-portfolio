import Picture from './Picture';

export default {
  title: 'UIParts/Image/Picture',
  component: Picture,
}

const Template = (args) => <Picture {...args}/>
export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/600/600.webp',
  alt: 'test'
}
