import React, { Component } from 'react';
import anime from 'animejs';
import Svg from '../../logos/logo3.svg';

export default class SvgLogo extends Component {
  componentDidMount() {
    this.logoAnimation();
  }

  logoAnimation = async () => {
    await anime({
      targets: '#svg-logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      delay: (el, i) => {
        return i * 150;
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

  render() {
    return <Svg />;
  }
}
