import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopThumb = ({ post }) => {
  const { id } = post;
  return(
    <Link to={`/detail/${id}/`} className="item">
      <img src="/img/pc_mhd_logo.png" />
    </Link>
  );
};

TopThumb.propTypes = {
  post: PropTypes.object
};

export default TopThumb;
