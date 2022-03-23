import Section from '../../Sections/Section/Section';
import { Header } from "../../Sections/SectionHeader/SectionHeader.stories";
import { PureMiniThumbLists } from "./ThumbNailMiniLists";
import { MiniThumbNail } from "../ThumbNailsMini/ThumbNailsMini.stories";

export default {
  title: 'UIParts/ThumbNails',
  component: PureMiniThumbLists,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => (
  <Section maxWidth={1000} p={20}>
    <Header {...Header.args} mb={[10, 60]} />
    <PureMiniThumbLists {...args} />
  </Section>
);

export const MiniThumbNailListsDefault = Template.bind({});
MiniThumbNailListsDefault.args = {
  thumbs: [
    { ...MiniThumbNail.args, postId: '1' },
    { ...MiniThumbNail.args, postId: '2' },
    { ...MiniThumbNail.args, postId: '3' },
    { ...MiniThumbNail.args, postId: '4' },
    { ...MiniThumbNail.args, postId: '5' },
    { ...MiniThumbNail.args, postId: '6' },
  ]
}