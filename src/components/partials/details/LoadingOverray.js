import React from 'react';
import anime from 'animejs';
import './../../../styles/loading-overray.scss';

export default function LoadingOverRay({ ready, isRemoved, remove }) {
  const overrayClassNames = [`${isRemoved ? 'open' : ''}`].join(' ');
  if (ready && !isRemoved) {
    setTimeout(() => {
      anime({
        targets: '#loading_overray',
        opacity: [1, 0],
        easing: 'easeOutCubic',
        duration: 200,
        complete: () => {
          remove();
        }
      });
    }, 2000);
  }

  return <div id="loading_overray" className={overrayClassNames} />;
}
