import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

import { theme } from "../../../styles/global";
import FadeIn from "../../../uiParts/FadeIn/FadeIn";
import Section from "../../../uiParts/Sections/Section/Section";
import SectionHeader2 from '../../../uiParts/SectionHeader2/SectionHeader2';
import TimeLine from '../../../uiParts/TimeLine/TimeLine/TimeLine';

export default function Experience() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  });
  const isVisible = !!entry?.isIntersecting;
  const placeholderExp = {
    start: '01.04.2022',
    end: '02.04.2022',
    title: 'Test Company',
    roll: 'Senior Web Dev',
    description: `Five Star Interactive is a web development company which was spun off from
    Japanese advertisement company called “Asahi Koukoku”.
    I worked as a web developer and created a variety of web products such as
    corporate websites, E-commerce, Web apps.
    
    – Developed E-commerce Websites using EC-CUBE based on Silex.
    – Built Instagram and Products data management application which provides customized data with Rest-API.
    – Made Web application sending and receiving Midi signals
    – Developed a variety of web sites with Laravel5, WordPress, Javascript.
    – Taught programming as a mentor.
    `
  }

  const experiences = [
    { ...placeholderExp },
    { ...placeholderExp },
    { ...placeholderExp },
    { ...placeholderExp },
  ]
  
  return (
    <Section
      ref={ref}
      py={75}
      px={20}
      bg={theme.colors.gray}
    >
      {isVisible && 
        <FadeIn
          yOffset={10}
          duration={0.6}
        >
          <SectionHeader2 
            text='Experience'
            mb={60}
            />
        </FadeIn>
      }

      {experiences.map(
        ({ id, ...args }) => <TimeLine key={id} {...args} />
      )}
    </Section>
  );
}