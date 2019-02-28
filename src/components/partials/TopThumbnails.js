import React from 'react';
import PropTypes from 'prop-types';
import TopThumb from './TopThumb';

const TopThumbnails = ({ posts }) => {
  return (
    <div className="inner boxfade-init">
      {posts.map((post, index) => {
        return <TopThumb key={post.id} post={post} index={index} />;
      })}
    </div>
  );
};

TopThumbnails.propTypes = {
  posts: PropTypes.array
};

export default TopThumbnails;