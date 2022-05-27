import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useIntersectionObserver } from 'usehooks-ts';

import { SectionWithHeaderGray } from '../Sections/Section.stories';
import Section from '../Sections/Section/Section';
import VerticalBorder from './VerticalBorder';
import SectionHeader from '../Sections/SectionHeader/SectionHeader';

export default {
  title: 'UIParts/VerticalBorder',
  component: VerticalBorder,
}

const Template = (args) => { 
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
    <Section ref={ref} {...args} mt={40} position='relative'>
      <VerticalBorder control={control} />
      <SectionHeader title="Test"/>
    </Section>
  )
}
export const Default = Template.bind({});
Default.args = {
  ...SectionWithHeaderGray.args
}
