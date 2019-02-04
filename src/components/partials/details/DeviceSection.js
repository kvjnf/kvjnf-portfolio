import React from 'react';
import PropTypes from 'prop-types';

import ScrollAnimation from './../../../utils/ScrollAnimation';

function DeviceSection({ devices }) {
  if (Object.keys(devices).length > 0) {
    const pcScrollOption = {
      translateY: 50,
      opacity: 1,
      easing: 'easeOutCubic',
      duration: 1000
    };
    const spScrollOption = {
      translateX: 50,
      opacity: 1,
      easing: 'easeOutCubic',
      duration: 1000
    };

    return (
      <div className="device_section">
        <ScrollAnimation show={pcScrollOption} baseLine={'center'}>
          <img
            className="display displayfade-init"
            src={devices.pc.full_image_url}
            alt={devices.pc.title}
          />
        </ScrollAnimation>
        <ScrollAnimation show={spScrollOption} baseLine={'center'}>
          <img
            className="iphone iphonefade-init"
            src={devices.sp.full_image_url}
            alt={devices.sp.title}
          />
        </ScrollAnimation>
      </div>
    );
  }
  return null;
}

DeviceSection.propTypes = {
  devices: PropTypes.object
};

export default DeviceSection;
