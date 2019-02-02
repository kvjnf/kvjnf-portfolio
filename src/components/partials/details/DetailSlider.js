import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

function DetailSlider({ gallery }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    fade: true,
    heightMode: 'current'
  };

  const getGalleryItems = () => {
    return gallery.map(item => {
      return (
        <div key={item.id} className="item">
          <img src={item.full_image_url} alt="item.title" />
        </div>
      );
    });
  };

  return <Slider {...settings}>{getGalleryItems()}</Slider>;
}

DetailSlider.propTypes = {
  gallery: PropTypes.array
};

export default DetailSlider;
