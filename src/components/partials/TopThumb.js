import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const TopThumb = ({ post, index, ready }) => {
  const { id } = post;
  const option = {
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 1000,
    delay: index * 100,
    ready: ready
  };
  return (
    <Link to={`/detail/${id}/`} className="item">
      <Logo id={id} post={post} option={option} />
    </Link>
  );
};

TopThumb.porpTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  ready: PropTypes.bool
};

export default TopThumb;
