import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const TopThumb = ({ post }) => {
  const { id } = post;
  return (
    <Link to={`/detail/${id}/`} className="item">
      <Logo post={post} />
    </Link>
  );
};

TopThumb.porpTypes = {
  post: PropTypes.object
};

export default TopThumb;
