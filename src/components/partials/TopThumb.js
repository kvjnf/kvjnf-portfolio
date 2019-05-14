import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const TopThumb = ({ post, index }) => {
  const { id } = post;
  const option = {
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 1000,
    delay: index * 100
  };
  return (
    <Link to={`/detail/${id}/`} className="item">
      <Logo key={id} id={id} post={post} option={option} />
    </Link>
  );
};

TopThumb.porpTypes = {
  post: PropTypes.object,
  index: PropTypes.number
};

export default TopThumb;
