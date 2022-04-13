import { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import { flexbox } from 'styled-system';
import { useAnimation } from 'framer-motion';
import { useIntersectionObserver } from 'usehooks-ts';

import VerticalBorder from '../../../uiParts/VerticalBorder/VerticalBorder';
import LazyLoadImage from '../../../uiParts/LazyLoadImage/LazyLoadImage';
import FadeIn from '../../../uiParts/FadeIn/FadeIn';
import Section from '../../../uiParts/Sections/Section/Section';
import placeholder from '../../../../static/pc_midi_logo.png';


const FlexSection = styled(Section)`
  ${flexbox}
  position: relative;
`;

export default function ProjectLogo() {
  const theme = useTheme();
  const control = useAnimation();
  const logoControl = useAnimation();
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  });

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    control.start({
      height: '50px',
      transition: {
        duration: 1
      }
    });
    
    logoControl.start('show');
  }, [isVisible, control, logoControl])

  return (
    <FlexSection
      height={200}
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg={theme.colors.gray}
    >
      <VerticalBorder control={control} />
      <FadeIn
        yOffset={10}
        duration={1}
        controls={logoControl}
      >
        <LazyLoadImage src={placeholder} alt="test" />
      </FadeIn>
    </FlexSection>
  )
}
