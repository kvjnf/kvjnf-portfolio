import React from 'react';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

const TopScroller = () => {
  const onClickTopScroll = () => {
    const node = document.getElementById('root');
    Velocity(node, 'scroll', { duration: 500, easing: 'easeInOutCubic' });
  };

  return (
    <div className="pagetop" onClick={onClickTopScroll}>
      <span className="arrow upfade-init" />
    </div>
  );
};

export default TopScroller;
