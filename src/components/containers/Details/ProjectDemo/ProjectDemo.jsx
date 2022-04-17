import styled from 'styled-components';

import pcPlaceholder from '../../../../static/mhd-pc.png';
import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useIntersectionObserver, useMediaQuery } from 'usehooks-ts';

import spPlaceholder from '../../../../static/mhd-sp.png';
import Section from '../../../uiParts/Sections/Section/Section';
import LazyLoadImage from '../../../uiParts/LazyLoadImage/LazyLoadImage';
import FadeIn from '../../../uiParts/FadeIn/FadeIn';
import { theme } from '../../../styles/global';

const DeviceSection = styled(Section)`
  ${theme.media.lg`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  `}
`;

const DeviceImage = styled.div`
  z-index: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: max-content;
  position: absolute;

  ${theme.media.lg`
    position: static;
  `}
`;

const DeviceImageSp = styled(DeviceImage)`
  bottom: 100px;
  left: 100px;
  margin: unset;
  ${theme.media.lg`
    max-width: unset;
    width: 45%;
  `}
`;

export default function ProjectDemo() {
  const devices = {
    pc: {
      src: pcPlaceholder,
      alt: 'pc test'
    },
    sp: {
      src: spPlaceholder,
      alt: 'sp test',
    }
  }
  
  const control = useAnimation();
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  });
  const isVisible = !!entry?.isIntersecting;
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints[2]})`);

  useEffect(() => {
    control.start('show');
  }, [isVisible, control]);

  return (
    <DeviceSection
      ref={ref}
      width={['auto', 'auto', 'auto', 1000]}
      height={['auto', 'auto', 'auto', 500]}
      my={0}
      mx='auto'
      py={100}
      px={20}
      position='relative'
    >
      <DeviceImage>
        <FadeIn
          yOffset={-50}
          duration={1}
          controls={control}
        >
          <LazyLoadImage 
            src={devices.pc.src}
            alt={devices.pc.alt}
            width={604}
            height={401}
            option='blur'
            threshold={0.2}
          />
        </FadeIn>
      </DeviceImage>
      { devices.sp && 
        <DeviceImageSp>
          <FadeIn
            yOffset={matches ? -50 : 0}
            xOffset={matches ? 0 : -50}
            duration={1}
            controls={control}
            delayOrder={2}
          >
            <LazyLoadImage 
              src={devices.sp.src}
              alt={devices.sp.alt}
              width={170}
              height={350}
              option='blur'
              threshold={0.2}
            />
          </FadeIn>
        </DeviceImageSp>
      }
    </DeviceSection>
  )
}
