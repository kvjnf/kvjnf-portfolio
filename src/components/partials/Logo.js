import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { post, option = {}, id = 1 } = this.props;
    if (Object.keys(post).length > 0) {
      const imgSource = post._embedded['wp:featuredmedia'][0].source_url || '';
      const { ready = true } = option;
      const logoClass = `portfolio-logo-${id}`;

      if (ready && !this.state.show) {
        anime({
          ...option,
          targets: '.' + logoClass,
          complete: () => {
            this.setState({ show: true });
          }
        });
      }
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
