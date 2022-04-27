import ProjectCaptures from "./ProjectCaptures";

export default {
  title: 'UIParts/ProjectCaptures',
  component: ProjectCaptures,
}

const Template = (args) => <ProjectCaptures {...args} />

const listsNumbers = [...Array(4).keys()];
const captures = listsNumbers.map(i => `https://picsum.photos/400/1000?random=${i}`);

export const Default = Template.bind({});
Default.args = {
  captures
}
