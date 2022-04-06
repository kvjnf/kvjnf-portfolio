import { loremIpsum } from "lorem-ipsum";

import AboutSection from "./AboutSection";

export default {
  title: 'UIParts/Sections',
  component: AboutSection,
}

const Template = (args) => <AboutSection {...args} />;
export const About = Template.bind({});
About.args = {
  title: loremIpsum({
    count: 2,
    units: 'words',
  }),
  description: loremIpsum({
    count: 5,
  })
}