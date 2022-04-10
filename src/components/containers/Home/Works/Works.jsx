import SectionHeader2 from "../../../uiParts/SectionHeader2/SectionHeader2";
import Section from "../../../uiParts/Sections/Section/Section";
import { ThumbNailMiniLists } from "../../../uiParts/ThumbNails/ThumbNailMiniLists/ThumbNailMiniLists";

export default function Works() {
  return (
    <Section
      pt={75}
      pb={100}
    >
      <SectionHeader2
        text='MY WORKS'
        mb={60}
      />
      <ThumbNailMiniLists />
    </Section>
  );
}