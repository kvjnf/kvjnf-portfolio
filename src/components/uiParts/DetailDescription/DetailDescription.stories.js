import { loremIpsum } from "lorem-ipsum";

import DetailDescription from "./DetailDescription";

export default {
  title: 'UIParts/DetailDescription',
  component: DetailDescription,
}

const Template = (args) => <DetailDescription {...args} />

export const Default = Template.bind({});
Default.args = {
  title: loremIpsum({
    count: 2,
    units: 'words',
  }),
  client: loremIpsum({
    count: 4,
    units: 'words',
  }),
  description: loremIpsum({
    count: 5
  }),
}