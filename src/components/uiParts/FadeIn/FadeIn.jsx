import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';

function FadeIn({ 
  children,
  easing = [0.42, 0, 0.58, 1],
  yOffset = 20,
  duration = 0.4,
  delayOrder
}) {
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
    [delay, easing]
  );

  const variants = {
    hidden: { 
      y: yOffset, 
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

FadeIn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  easing: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.oneOf([
      'linear',
      'easeIn',
      'easeOut',
      'easeInOut',
      'circIn',
      'circOut',
      'circInOut',
      'backIn',
      'backOut',
      'backInOut',
      'anticipate'
    ])
  ]),
  yOffset: PropTypes.number,
  duration: PropTypes.number,
  delayOrder: PropTypes.number
}

export default FadeIn
