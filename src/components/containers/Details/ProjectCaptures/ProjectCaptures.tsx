import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

import LazyLoadImage from '../../../uiParts/LazyLoadImage/LazyLoadImage';
import Grid from '../../../uiParts/Grid/Grid';
import FadeIn from '../../../uiParts/FadeIn/FadeIn';

const StyledGrid = styled(Grid)`
  justify-items: center;
  align-content: space-between;

  grid-template-columns: 1fr 1fr;
  ${(props) => props.theme.media.md`
    grid-template-columns: 1fr;
  `}
`;

interface Props {
  captures: string[];
}

export default function ProjectCaptures({ captures }: Props) {
  const control = useAnimation();

  useEffect(() => {
    control.start('show');
  }, [control])

  const lists = captures.map((src, i) => {
    return (
      <FadeIn
        key={`cap-${i}`}
        controls={control}
        yOffset={-20}
        xOffset={i % 2 === 0 ? -20 : 20}
        easing={[0.33, 1, 0.68, 1]}
        duration={1}
      >
        <LazyLoadImage 
          width={480}
          height={1000}
          src={src}
          option='blur'
          alt='test'
          threshold={0.01}
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
