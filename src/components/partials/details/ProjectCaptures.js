import React from 'react';
import PropTypes from 'prop-types';
// import DetailSlider from './DetailSlider';

function ProjectCaptures({ gallery }) {
  if (gallery.length > 0) {
    const getGalleryItems = () => {
      return gallery.map(item => {
        return (
          <div key={item.id} className="item">
            <img src={item.full_image_url} alt="item.title" />
          </div>
        );
      });
    };
    return (
      <div className="screen">
        <div className="in_wrap flex_layout">{getGalleryItems()}</div>
      </div>
    );
  }
  return null;
}

ProjectCaptures.propTypes = {
  gallery: PropTypes.array
};

export default ProjectCaptures;
