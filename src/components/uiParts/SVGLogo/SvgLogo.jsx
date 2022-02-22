import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

const pathLists = [
  "M6,60.5H0L24.8,0h5.4L6,60.5z M39,39.3l2,5H15.1l1.9-5H39z M56,60.5h-6L29.3,8.6l2.8-7.3L56,60.5z",
  "M66.6,0h5.2v60.5h-5.2V0z M101,0h6.6L74,36.9v-7.3L101,0z M83.5,30.3l26.7,30.2h-6.6L80.1,33.7L83.5,30.3z",
  "M121.6,0h5.2v60.5h-5.2V0z",
  "M137.5,0h6.3l23,33.7v26.9h-5.3V34.7L137.5,0z M184.6,0h6.3l-22.3,32.2l-3-4.4L184.6,0z",
  "M201.4,60.5h-6L220.1,0h5.4L201.4,60.5z M234.4,39.3l2,5h-25.9l1.9-5H234.4z M251.4,60.5h-6L224.7,8.6l2.8-7.3L251.4,60.5z",
  "M267.2,60.5h-5.2V0l5.2,12.4V60.5z M264.6,0h5.3l24.9,60.5h-5.3L264.6,0z M310.9,0h5.3l-22,53.6l-2.5-6.3L310.9,0z M318.7,0v60.5h-5.3v-48L318.7,0z",
  "M335.3,60.5h-6L354.1,0h5.4L335.3,60.5z M368.4,39.3l2,5h-25.9l1.9-5H368.4z M385.3,60.5h-6L358.7,8.6l2.8-7.3L385.3,60.5z",
  "M2.4,86.4v18.1H0.9V86.4H2.4z M11.5,91.7c0-2.5-1.7-3.9-4-3.9H3.1v-1.4h4.6c3.3,0,5.4,2.2,5.4,5.3c0,2.7-2.1,5.3-5.4,5.3H3.1v-1.4h4.4C9.8,95.6,11.5,93.7,11.5,91.7z",
  "M53.7,86.1v1.4c-4.2,0.1-6.9,3.5-6.9,8c0,4.5,2.7,7.8,6.9,8v1.4c-5.2-0.1-8.5-4.1-8.5-9.4C45.1,90.2,48.5,86.2,53.7,86.1z M54.4,104.8v-1.4c4.1-0.2,6.8-3.5,6.8-8c0-4.4-2.7-7.8-6.8-7.9v-1.4c5.1,0.2,8.4,4.2,8.4,9.4C62.8,100.6,59.4,104.6,54.4,104.8z",
  "M98.1,104.5h-1.6V86.4h1.6V104.5z M103.2,87.8h-4.4v-1.4h4.5c3.1,0,5.5,2,5.5,5.3c0,3.3-2.4,5.3-5.5,5.3h-4.5v-1.4h4.4c2.4,0,4-1.6,4-3.9C107.2,89.4,105.6,87.8,103.2,87.8z M102.4,97.6h1.9l4.8,6.9h-2L102.4,97.6z",
  "M146.6,87.8h-5.3v-1.4h5.3V87.8z M148.9,86.4v18.1h-1.6V86.4H148.9z M154.8,86.4v1.4h-5.3v-1.4H154.8z",
  "M190,86.4v18.1h-1.6V86.4H190z M200,86.4v1.4h-9.3v-1.4H200z M199.8,94.5v1.4h-9.1v-1.4H199.8z",
  "M240.5,86.1v1.4c-4.2,0.1-6.9,3.5-6.9,8c0,4.5,2.7,7.8,6.9,8v1.4c-5.2-0.1-8.5-4.1-8.5-9.4C231.9,90.2,235.3,86.2,240.5,86.1z M241.2,104.8v-1.4c4.1-0.2,6.8-3.5,6.8-8c0-4.4-2.7-7.8-6.8-7.9v-1.4c5.1,0.2,8.4,4.2,8.4,9.4C249.6,100.6,246.2,104.6,241.2,104.8z",
  "M283.5,86.4h1.6v18.1h-1.6V86.4z M293.9,103.1v1.4h-8.1v-1.4H293.9z",
  "M327.5,86.4h1.6v18.1h-1.6V86.4z",
  "M371.4,86.1v1.4c-4.2,0.1-6.9,3.5-6.9,8c0,4.5,2.7,7.8,6.9,8v1.4c-5.2-0.1-8.5-4.1-8.5-9.4C362.9,90.2,366.2,86.2,371.4,86.1z M372.1,104.8v-1.4c4.1-0.2,6.8-3.5,6.8-8c0-4.4-2.7-7.8-6.8-7.9v-1.4c5.1,0.2,8.4,4.2,8.4,9.4C380.5,100.6,377.1,104.6,372.1,104.8z",
];

const StyledMotionPath = styled(motion.path)`
  stroke: #040000;
  stroke-width: 0.3;
`;

const easing = [0.33, 1, 0.68, 1];

const container = {
  stroke: {
    transition: {
      staggerChildren: 0.15
    }
  },
}

const strokePaths = {
  initial: {
    strokeDasharray: 100,
    strokeDashoffset: 100,
    fill: 'rgba(4,0,0,0)',
  },
  stroke: {
    strokeDashoffset: 0,
    transition: {
      duration: 0.8,
      easing
    }
  },
  fill: {
    fill: 'rgba(4,0,0,1)',
    transition: {
      duration: 0.8,
      easing
    }
  }
}

export const SvgLogo = () => {
  const pathControl = useAnimation();

  async function pathSequence() {
    await pathControl.start('stroke');
    pathControl.start('fill');
  }

  useEffect(() => {
    pathSequence();
  }, []);
  
  return (
    <motion.svg
      viewBox="0 0 386 150"
      initial="initial"
      animate={pathControl}
      variants={container}
    >
      {pathLists.map((path, i) => {
          return (
            <StyledMotionPath
              key={`motion-path-${i}`}
              paintOrder="stroke"
              d={path}
              pathLength={100}
              variants={strokePaths}
            />
          );
        })
      }
    </motion.svg>
  )
}