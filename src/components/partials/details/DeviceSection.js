import React from 'react';
import PropTypes from 'prop-types';

function DeviceSection({ devices }) {
  if (Object.keys(devices).length > 0) {
    return (
      <div className="device_section">
        <img
          className="display displayfade-init"
          src={devices.pc.full_image_url}
          alt={devices.pc.title}
        />
        <img
          className="iphone iphonefade-init"
          src={devices.sp.full_image_url}
          alt={devices.sp.title}
        />
      </div>
    );
  }
  return null;
}

DeviceSection.propTypes = {
  devices: PropTypes.object
};

export default DeviceSection;
