import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';

export default class ScrollAnimation extends Component {
  constructor(props) {
    super(props);
    const { show, hide = false, baseLine = 'bottom', ready = true } = props;
    this.ready = ready;
    this.show = show;
    this.hide = hide;
    this.baseLine = baseLine;
    this.flag = false;
  }

  componentDidMount() {
    if (this.ready) {
      this.init();
    }
  }

  init() {
    this.scrollEventListener();
    window.addEventListener('scroll', this.scrollEventListener.bind(this));
  }

  scrollTop() {
    if (window.pageYOffset) return window.pageYOffset;
    return document.documentElement.clientHeight
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  }

  scrollEventListener() {
    if (!this.ref) return;

    const baseY = this.scrollTop() + window.innerHeight;
    let targetY = this.ref.getBoundingClientRect().top + window.pageYOffset;

    if (this.baseLine === 'center') {
      targetY += this.ref.clientHeight / 2;
    }

    if (baseY >= targetY) {
      if (!this.flag) {
        this.flag = true;
        anime({ targets: this.ref, ...this.show });
      }
    } else {
      if (this.flag && Object.keys(this.hide).length > 0) {
        this.flag = false;
        anime({ targets: this.ref, ...this.show, ...this.hide });
      }
    }
  }

  render() {
    const childElement = React.Children.only(this.props.children);
    return cloneElement(childElement, {
      ref: el => (this.ref = ReactDOM.findDOMNode(el))
    });
  }
}
