import styled from 'styled-components';

import { theme } from '../../../styles/global';
import LazyLoadImage from '../../../uiParts/LazyLoadImage/LazyLoadImage';
import Grid from '../../../uiParts/Grid/Grid';
import FadeIn from '../../../uiParts/FadeIn/FadeIn';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const StyledGrid = styled(Grid)`
  justify-items: center;
  align-content: space-between;

  grid-template-columns: 1fr 1fr;
  ${theme.media.md`
    grid-template-columns: 1fr;
  `}
`;

export default function ProjectCaptures() {
  const listsNumbers = [...Array(4).keys()];
  const control = useAnimation();

  useEffect(() => {
    control.start('show');
  }, [control])

  const lists = listsNumbers.map((_, i) => {
    const placeHolder = {
      width: 480, 
      height: 1000,
      src: `https://picsum.photos/480/1000?random=${i}`,
      option: 'blur',
      alt: 'test',
      threshold: 0.1
    };

    const option = {
      y: [-20, 0],
      x: i % 2 === 0 ? [-20, 0] : [20, 0],
      easing: [0.33, 1, 0.68, 1],
      duration: 1
    }

    return (
      <FadeIn
        yOffset={option.y}
        xOffset={option.x}
        duration={option.duration}
        easing={option.easing}
        controls={control}
      >
        <LazyLoadImage 
          key={`cap-${i}`}
          { ...placeHolder }
        />
      </FadeIn>
    );
  });

  return (
    <StyledGrid
      gridColumn={2}
      gridGap={20}
      maxWidth={1000}
      py={60}
      px={15}
      margin='0 auto'
    >
      { lists }
    </StyledGrid>
  )
}
