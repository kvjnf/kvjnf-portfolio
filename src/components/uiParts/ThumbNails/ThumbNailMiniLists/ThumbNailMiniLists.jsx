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
  const fake = { postId: 0, src: placeholder, alt: 'test' };
  const thumbs = [
    { ...fake },
    { ...fake, postId: 1 },
    { ...fake, postId: 2 },
    { ...fake, postId: 3 },
    { ...fake, postId: 4 },
    { ...fake, postId: 5 },
  ]

  return (
    <PureMiniThumbLists thumbs={thumbs}/>
  )
}
