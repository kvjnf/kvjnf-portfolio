import ThumbNailsMini from '../ThumbNailsMini/ThumbNailsMini';
import styled from 'styled-components';
import { theme } from '../../../styles/global';

import placeholder from '../../../../static/pc_midi_logo.png';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  ${theme.media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  `}
`;

export function PureMiniThumbLists ({ thumbs }) {  
  return (
    <Grid>
      {thumbs.map((thumb) => (
        <ThumbNailsMini key={thumb.postId} {...thumb} />
      ))}
    </Grid>
  );
}

export function ThumbNailMiniLists () {
  const fake = { postId: 'thumb-test0', src: placeholder, alt: 'test' };
  const thumbs = [
    { ...fake },
    { ...fake, postId: 'thumb-test1' },
    { ...fake, postId: 'thumb-test2' },
    { ...fake, postId: 'thumb-test3' },
    { ...fake, postId: 'thumb-test4' },
    { ...fake, postId: 'thumb-test5' },
  ];

  return (
    <PureMiniThumbLists thumbs={thumbs}/>
  )
}
