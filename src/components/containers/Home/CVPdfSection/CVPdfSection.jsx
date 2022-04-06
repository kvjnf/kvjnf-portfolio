import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useIntersectionObserver } from 'usehooks-ts';
import { useTheme } from 'styled-components';

import Section from '../../../uiParts/Sections/Section/Section';
import VerticalBorder from '../../../uiParts/VerticalBorder/VerticalBorder';
import BlankLinkHoverBtn from '../../../uiParts/Buttons/BlankLinkHoverBtn';
import FadeIn from '../../../uiParts/FadeIn/FadeIn';

export default function CVPdfSection() {
  const theme = useTheme();
  const control = useAnimation();
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  });

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      control.start({
        height: '50px',
        transition: {
          duration: 1
        }
      })
    }
  }, [isVisible, control]);

  return (
    <Section 
      ref={ref} 
      mt={40} 
      position='relative'
      pt={60}
      pb={[60, 75]}
      bg={theme.colors.gray}
      >
      <VerticalBorder control={control} />
      {isVisible && 
        <FadeIn
          yOffset={10}
          duration={0.8}  
          delayOrder={2}
        >
          <BlankLinkHoverBtn 
            text="View CV" 
            link="/resources/pdf/cv-daisukev3.pdf" 
            isArrow={true}
          />
        </FadeIn>
      }
    </Section>
  )
}
