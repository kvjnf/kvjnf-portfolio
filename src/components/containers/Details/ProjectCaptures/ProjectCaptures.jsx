import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

import { theme } from '../../../styles/global';
import LazyLoadImage from '../../../uiParts/LazyLoadImage/LazyLoadImage';
import Grid from '../../../uiParts/Grid/Grid';
import FadeIn from '../../../uiParts/FadeIn/FadeIn';

const StyledGrid = styled(Grid)`
  justify-items: center;
  align-content: space-between;

  grid-template-columns: 1fr 1fr;
  ${theme.media.md`
    grid-template-columns: 1fr;
  `}
`;

export default function ProjectCaptures({ captures }) {
  const control = useAnimation();

  useEffect(() => {
    control.start('show');
  }, [control])

  const lists = captures.map((src, i) => {
    const placeHolder = {
      width: 480, 
      height: 1000,
      src,
      option: 'blur',
      alt: 'test',
      threshold: 0.01
    };
    const option = {
      yOffset: -20,
      xOffset: i % 2 === 0 ? -20 : 20,
      easing: [0.33, 1, 0.68, 1],
      duration: 1
    }

    return (
      <FadeIn
        key={`cap-${i}`}
        controls={control}
        {...option}
      >
        <LazyLoadImage 
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
