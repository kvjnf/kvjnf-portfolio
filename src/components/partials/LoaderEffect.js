import React from 'react';
import '../../styles/loading-overray.scss';

export default function LoaderEffect({ loaded = true }) {
  const classes = ['loader-effect', loaded ? 'loaded' : ''].join(' ');

  return (
    <div className={classes}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
