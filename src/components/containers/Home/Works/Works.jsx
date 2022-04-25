import { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';

import { useGetProjectsQuery } from "../../../../services/api";
import SectionHeader2 from "../../../uiParts/SectionHeader2/SectionHeader2";
import Section from "../../../uiParts/Sections/Section/Section";
import { PureMiniThumbLists } from "../../../uiParts/ThumbNails/ThumbNailMiniLists/ThumbNailMiniLists";


export default function Works() {
  const selectThumbs = useMemo(() => {
    return createSelector(
      res => res.data,
      ({ 
        items, 
        includes : { Asset } 
      } = { items: [], includes: { Asset: [] } }) => {
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
      }
    )
  }, [])
  
  const { thumbs } = useGetProjectsQuery(undefined, {
    selectFromResult: res => ({
        ...res,
        thumbs: selectThumbs(res)
      })
    });

  return (
    <Section
      pt={75}
      pb={100}
    >
      <SectionHeader2
        text='MY WORKS'
        mb={60}
      />
      { thumbs && <PureMiniThumbLists thumbs={thumbs} /> }
    </Section>
  );
}