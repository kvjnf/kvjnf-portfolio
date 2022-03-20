import Section from './Section/Section';
import SectionHeader from "./SectionHeader/SectionHeader";
import { Header } from './SectionHeader/SectionHeader.stories';

export default {
  title: 'UIParts/Sections',
  component: Section,
  subcomponent: SectionHeader,
}

const SectionTemplate = (args) => (
  <Section {...args}>
    <Header {...Header.args}/>
  </Section>
);

export const SectionWithHeader = SectionTemplate.bind({});
SectionWithHeader.args = {
  pt: 75,
  pb: 100,
  px: 20,
};

export const SectionWithHeaderGray = SectionTemplate.bind({});
SectionWithHeaderGray.args = {
  ...SectionWithHeader.args,
  bg: "gray"
};
