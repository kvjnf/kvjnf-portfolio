import React from 'react';
import PropTypes from 'prop-types';

function Logo({ post }) {
  if (Object.keys(post).length > 0) {
    const imgSource = post._embedded['wp:featuredmedia'][0].source_url || '';
    return <img src={imgSource} alt={post.title.rendered} />;
  }

  return null;
}

Logo.propTypes = {
  post: PropTypes.object
};

export default Logo;
