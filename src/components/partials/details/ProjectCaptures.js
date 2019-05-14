import React from 'react';
import PropTypes from 'prop-types';
import {
  LazyLoadImage,
  trackWindowScroll
} from 'react-lazy-load-image-component';
import ScrollAnimation from './../../../utils/ScrollAnimation';

function ProjectCaptures({ gallery, scrollPosition }) {
  if (gallery.length > 0) {
    const getGalleryItems = () => {
      return gallery.map((item, index) => {
        const animeOption = {
          translateY: [-20, 0],
          translateX: index % 2 === 0 ? [-20, 0] : [20, 0],
          opacity: [0.2, 1],
          easing: 'easeOutCubic',
          duration: 1000
        };
        return (
          <ScrollAnimation key={item.id} show={animeOption} baseLine={'center'}>
            <div className="item">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src={item.full_image_url}
                alt={item.title}
                threshold={50}
              />
            </div>
          </ScrollAnimation>
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

export default trackWindowScroll(ProjectCaptures);
