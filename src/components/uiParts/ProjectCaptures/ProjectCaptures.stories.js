import ProjectCaptures from "./ProjectCaptures";
import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";
import { Blur } from "../LazyLoadImage/LazyLoadImage.stories";

export default {
  title: 'UIParts/ProjectCaptures',
  component: ProjectCaptures,
}

const Template = (args) => <ProjectCaptures {...args} />

const listsNumbers = [...Array(4).keys()];
const lists = listsNumbers.map(i => {
  const args = { 
    ...Blur.args, 
    width: 400, 
    height: 1000,
    src: `https://picsum.photos/400/1000?random=${i}`
  };

  return <LazyLoadImage 
    key={i}
    { ...args }
  />
})

export const Default = Template.bind({});
Default.args = {
  lists
}
