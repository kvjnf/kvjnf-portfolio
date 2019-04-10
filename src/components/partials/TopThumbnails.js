import React from 'react';
import PropTypes from 'prop-types';
import TopThumb from './TopThumb';

const TopThumbnails = ({ posts, ready }) => {
  return (
    <section id="works" className="sections">
      <h2 className="Montserrat upfade">MY WORKS</h2>
      <div className="inner boxfade-init">
        {posts.map((post, index) => {
          return (
            <TopThumb key={post.id} post={post} index={index} ready={ready} />
          );
        })}
      </div>
    </section>
  );
};

TopThumbnails.propTypes = {
  posts: PropTypes.array,
  ready: PropTypes.bool
};

export default TopThumbnails;
