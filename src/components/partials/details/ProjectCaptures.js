import React from 'react';
import PropTypes from 'prop-types';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Capture from './Capture';

function ProjectCaptures({ gallery, scrollPosition }) {
  if (gallery.length > 0) {
    const getGalleryItems = () =>
      gallery.map((item, index) => (
        <Capture
          key={`capture-${item.id}`}
          item={item}
          index={index}
          scrollPosition={scrollPosition}
        />
      ));

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

export default trackWindowScroll(ProjectCaptures);
