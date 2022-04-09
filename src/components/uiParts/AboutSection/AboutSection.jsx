import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useIntersectionObserver } from 'usehooks-ts';
import PropTypes from 'prop-types';

import Section from '../Sections/Section/Section';
import Paragraph from '../Paragraph/Paragraph';
import SectionHeader2 from '../SectionHeader2/SectionHeader2';
import FadeIn from '../FadeIn/FadeIn';


export default function AboutSection ({ title, description }) {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  })
  const isVisible = !!entry?.isIntersecting;
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [isVisible, controls]);

  return (
    <Section
      ref={ref}
      py={75}
      px={20}
    >
      <FadeIn
        yOffset={10}
        duration={1}
        controls={controls}
      >
        <SectionHeader2 text='ABOUT ME' />
      </FadeIn>
      <FadeIn
        yOffset={10}
        duration={0.6}
        delayOrder={2}
        controls={controls}
      >
        <Paragraph
          fontSize={20}
          marginBottom={20}
          maxWidth={700} 
          texts={title} 
          textAlign='center'
          fontStyle='alt'
        />
        <Paragraph 
          texts={description}
        />
      </FadeIn>
    </Section>
  )
}

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}