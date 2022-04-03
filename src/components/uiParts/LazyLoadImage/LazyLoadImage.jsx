import { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { useIntersectionObserver } from 'usehooks-ts'

import ShimmerPlaceholder from '../ShimmerPlaceHolder/ShimmerPlaceHolder';

const StyledImage = styled.img`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: filter 1s;
  width: 100%;
  ${(props) => {
    if (props.option === 'blur') {
      return `filter: blur(${props.loaded ? '0' : '10px'});`;
    } else if (props.option === 'grayscale') {
      return `filter: grayscale(${props.loaded ? '0%' : '100%'});`;
    }
  }} 
`;

function LazyLoadImage({ src, alt, width, height, option, ...args }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  });
  
  const isVisible = !!entry?.isIntersecting;
  const onLoad = () => setLoaded(true);

  return (
    <div>
      <ShimmerPlaceholder
        ref={ref}
        width={width}
        height={height}
        display={loaded ? 'none' : 'block'}
        {...args}
      />
    {
      isVisible && <StyledImage
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        visible={isVisible}
        loaded={loaded}
        onLoad={onLoad}
        option={option}
      />
    }
    </div>
  )
}

LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  option: PropTypes.oneOf(['blur', 'grayscale', 'none']),
  ...ShimmerPlaceholder.propTypes,
}

LazyLoadImage.defaultProps = {
  option: 'none'
}

export default LazyLoadImage
