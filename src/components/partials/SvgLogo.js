import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import Svg from '../../logos/logo3.svg';

class SvgLogo extends Component {
  logoAnimation = async () => {
    await anime({
      targets: '#svg-logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      delay: (el, i) => {
        return i * 100;
      },
      easing: 'easeOutCubic',
      direction: 'normal'
    }).finished;

    await anime({
      targets: '#svg-logo path',
      fill: '#040000',
      duration: 1000,
      easing: 'easeOutCubic'
    }).finished;
  };

  componentDidUpdate() {
    if (this.props.open) {
      this.logoAnimation();
    }
  }
  render() {
    return <Svg />;
  }
}

SvgLogo.propTypes = {
  open: PropTypes.bool
};

export default SvgLogo;
