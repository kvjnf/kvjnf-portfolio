import React from 'react';
import PropTypes from 'prop-types';

import ScrollAnimation from './../../utils/ScrollAnimation';

function Logo({ post, option = {} }) {
  if (Object.keys(post).length > 0) {
    const imgSource = post._embedded['wp:featuredmedia'][0].source_url || '';
    return (
      <ScrollAnimation show={option}>
        <img src={imgSource} alt={post.title.rendered} />
      </ScrollAnimation>
    );
  }

  return null;
}

Logo.propTypes = {
  post: PropTypes.object,
  option: PropTypes.object
};

export default Logo;
