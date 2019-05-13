import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class DeviceSection extends Component {
  constructor(props) {
    super(props);
    this.state = { showDevice: false };
  }

  componentDidMount() {
    this.showAnimation();
  }

  showAnimation() {
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

    anime(pcScrollOption);
    anime(spScrollOption);
  }

  render() {
    const { devices } = this.props;
    if (Object.keys(devices).length > 0) {
      const spScroll = () => {
        if (devices.sp) {
          return (
            <img
              className="iphone iphonefade-init"
              src={devices.sp.full_image_url}
              alt={devices.sp.title}
            />
          );
        }

        return null;
      };

      return (
        <div className="device_section">
          <img
            className="display displayfade-init"
            src={devices.pc.full_image_url}
            alt={devices.pc.title}
          />
          {spScroll()}
        </div>
      );
    }
    return null;
  }
}

DeviceSection.propTypes = {
  devices: PropTypes.object
};

export default DeviceSection;
