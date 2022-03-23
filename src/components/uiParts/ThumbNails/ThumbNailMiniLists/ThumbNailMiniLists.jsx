import { PropTypes } from 'prop-types';
import ThumbNailsMini from '../ThumbNailsMini/ThumbNailsMini';
import styled from 'styled-components';
import { theme } from '../../../styles/global';


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 1000px;

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
