import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class Logo extends Component {
  componentDidUpdate() {
    const { option = {}, id = 1, ready } = this.props;
    if (ready) {
      const logoClass = `portfolio-logo-${id}`;
      anime({
        ...option,
        targets: '.' + logoClass
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.ready !== nextProps.ready;
  }

  render() {
    const { post, id = 1 } = this.props;
    if (Object.keys(post).length > 0) {
      const imgSource = post._embedded['wp:featuredmedia'][0].source_url || '';
      const logoClass = `portfolio-logo-${id}`;

      return (
        <img className={logoClass} src={imgSource} alt={post.title.rendered} />
      );
    }

    return null;
  }
}

Logo.propTypes = {
  post: PropTypes.object,
  option: PropTypes.object,
  ready: PropTypes.bool
};

export default Logo;
