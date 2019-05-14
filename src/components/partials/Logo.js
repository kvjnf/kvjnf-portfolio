import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class Logo extends Component {
  componentDidMount() {
    const { option = {}, id = 1 } = this.props;
    const logoClass = `portfolio-logo-${id}`;
    anime({
      ...option,
      targets: '.' + logoClass
    });
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
  option: PropTypes.object
};

export default Logo;
