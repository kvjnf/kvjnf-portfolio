import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoaderEffect from '../LoaderEffect';
import ScrollAnimation from './../../../utils/ScrollAnimation';

class Capture extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const { item, index, scrollPosition } = this.props;

    let animeOption = {
      translateY: [-20, 0],
      translateX: index % 2 === 0 ? [-20, 0] : [20, 0],
      opacity: [0.2, 1],
      easing: 'easeOutCubic',
      duration: 1000
    };

    if (/^mlb.*$/.test(item.title)) {
      delete animeOption.translateX;
    }

    return (
      <ScrollAnimation show={animeOption} baseLine={'center'}>
        <div className="item">
          <LoaderEffect loaded={this.state.loaded} />
          <img
            className={`dummy ${this.state.loaded ? 'hide' : ''}`}
            src="/resources/img/placeholder-capture.png"
          />
          <LazyLoadImage
            className={`capture ${this.state.loaded ? 'loaded' : ''}`}
            scrollPosition={scrollPosition}
            src={item.full_image_url}
            alt={item.title}
            threshold={100}
            effect="blur"
            afterLoad={() => this.setState({ loaded: true })}
            placeholderSrc="/resources/img/placeholder-capture.png"
          />
        </div>
      </ScrollAnimation>
    );
  }
}

Capture.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  scrollPosition: PropTypes.number
};

export default Capture;
