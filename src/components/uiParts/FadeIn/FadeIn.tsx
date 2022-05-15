import React, { useState, useEffect, useMemo } from 'react';
import { AnimationControls, motion } from 'framer-motion';
import { Easing } from 'framer-motion/types/types';

interface Props {
  children: React.ReactElement;
  easing: Easing;
  yOffset: number;
  xOffset: number;
  duration: number;
  controls: AnimationControls;
  delayOrder: number;
}

export default function FadeIn({
  children,
  easing = [0.42, 0, 0.58, 1],
  yOffset = 20,
  xOffset = 0,
  duration = 0.4,
  controls,
  delayOrder
}:Props) {
  const [delay, setDelay] = useState(0.25);
  const offset = 0.4;
  
  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset);
  }, [delayOrder, offset]);

  const transition = useMemo(
    () => ({
      duration,
      delay,
      ease: easing
    }),
    [delay, easing, duration]
  );

  const variants = {
    initial: { 
      y: yOffset,
      x: xOffset,
      opacity: 0, 
      transition 
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition
    }
  };

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
