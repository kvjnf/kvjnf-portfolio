import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { post, option = {} } = this.props;
    if (Object.keys(post).length > 0) {
      const imgSource = post._embedded['wp:featuredmedia'][0].source_url || '';
      const { ready = false } = option;
      if (ready && !this.state.show) {
        anime({
          ...option,
          targets: '#portfolio-logo',
          complete: () => {
            this.setState({ show: true });
          }
        });
      }
      return (
        <img id="portfolio-logo" src={imgSource} alt={post.title.rendered} />
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
