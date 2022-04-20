import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useIntersectionObserver } from 'usehooks-ts';

import { theme } from "../../../styles/global";
import FadeIn from "../../../uiParts/FadeIn/FadeIn";
import Section from "../../../uiParts/Sections/Section/Section";
import SectionHeader2 from '../../../uiParts/SectionHeader2/SectionHeader2';
import TimeLine from '../../../uiParts/TimeLine/TimeLine/TimeLine';
import { useGetExperienceQuery } from '../../../../services/api';

export default function Experience() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  });
  const isVisible = !!entry?.isIntersecting;
  const control = useAnimation();
  const { data: { items } = [] } = useGetExperienceQuery();

  useEffect(() => {
    control.start('show');
  }, [isVisible, control]);

  return (
    <Section
      ref={ref}
      py={75}
      px={20}
      bg={theme.colors.gray}
    >
      <FadeIn
        controls={control}
        yOffset={10}
        duration={0.6}
       >
        <SectionHeader2 
          text='Experience'
          mb={60}
          />
      </FadeIn>
      { 
        items?.length && items.map(({ sys: { id }, fields }, i, { length }) => { 
          const isLast = length - 1 === i;

          return <TimeLine key={id} isLast={isLast} {...fields} />
        })
      }
    </Section>
  );
}

