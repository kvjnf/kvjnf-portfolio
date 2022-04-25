import { useGetProjectsQuery } from "../../../../services/api";
import SectionHeader2 from "../../../uiParts/SectionHeader2/SectionHeader2";
import Section from "../../../uiParts/Sections/Section/Section";
import { PureMiniThumbLists } from "../../../uiParts/ThumbNails/ThumbNailMiniLists/ThumbNailMiniLists";
import { useMemo } from 'react';

export default function Works() {
  const { 
    data: 
      { 
        items, 
        includes : { Asset } 
      } = { items: [], includes: { Asset: [] } }
  } = useGetProjectsQuery();

  const thumbs = useMemo(() => {
    if (!items.length) {
      return []
    }

    const resources = Asset.reduce((accumulator, asset) => ({
      ...accumulator, 
      [asset.sys.id]: asset.fields.file.url,
    }), {});

    return items.map(({ sys: { id }, fields: { title, slug, thumbnail }}) => ({
      id,
      title,
      slug,
      src: resources[thumbnail.sys.id]
    }));
  }, [items, Asset]);

  return (
    <Section
      pt={75}
      pb={100}
    >
      <SectionHeader2
        text='MY WORKS'
        mb={60}
      />
      { items && <PureMiniThumbLists thumbs={thumbs} /> }
    </Section>
  );
}