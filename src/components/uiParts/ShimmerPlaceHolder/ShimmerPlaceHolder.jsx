import styled from 'styled-components';
import { layout, space } from 'styled-system';
import { PropTypes } from 'prop-types';

export const ShimmerPlaceholder = styled.div`
  @keyframes placeHolderShimmer{
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
  }

  animation-name: placeHolderShimmer;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${props => props.lightest};
  background-image: ${props => `linear-gradient(to right, ${props.lightest} 0%, ${props.darkest} 20%, ${props.lightest} 40%, ${props.lightest} 100%)`};
  background-repeat: no-repeat;
  position: relative;
  ${ layout }
  ${ space }
`;

ShimmerPlaceholder.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  lightest: PropTypes.string,
  darkest: PropTypes.string,
}

ShimmerPlaceholder.defaultProps = {
  lightest: '#f6f7f9',
  darkest: '#e9ebee',
}
