import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import anime from 'animejs';

import '../../../styles/loading-overray.scss';

function DeviceSection({ devices }) {
  const pcScrollOption = {
    targets: '.display',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 1000
  };
  const spScrollOption = {
    targets: '.iphone',
    translateX: [0, 50],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 1000
  };

  if (Object.keys(devices).length > 0) {
    const spScroll = () => {
      if (devices.sp) {
        return (
          <LazyLoadImage
            className="iphone iphonefade-init"
            src={devices.sp.full_image_url}
            alt={devices.sp.title}
            afterLoad={() => {
              animateDevice(spScrollOption);
            }}
          />
        );
      }

      return null;
    };
    const place = (
      <div id="loader">
        <span />
        <span />
        <span />
        <span />
      </div>
    );

    return (
      <div className="device_section">
        <LazyLoadImage
          className="display displayfade-init"
          src={devices.pc.full_image_url}
          alt={devices.pc.title}
          afterLoad={() => {
            animateDevice(pcScrollOption);
          }}
          placeholder={place}
        />
        {spScroll()}
      </div>
    );
  }
  return null;
}

function animateDevice(option = {}) {
  setTimeout(() => {
    anime(option);
  }, 1);
}

DeviceSection.propTypes = {
  devices: PropTypes.object
};

export default DeviceSection;
