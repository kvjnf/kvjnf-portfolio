import styled from 'styled-components';
import { layout, space, SpaceProps, LayoutProps } from 'styled-system';

interface Props extends SpaceProps, LayoutProps {
  lightest?: string;
  darkest?: string;
};

const lightest = '#e1e1e1';
const darkest = '#f7f7f7';
const ShimmerPlaceholder = styled.div<Props>`
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
  background-color: ${props => props.lightest?? lightest};
  background-image: ${props => `linear-gradient(to right, ${props.lightest?? lightest} 0%, ${props.darkest?? darkest} 20%, ${props.lightest?? lightest} 40%, ${props.lightest?? lightest} 100%)`};
  background-repeat: no-repeat;
  position: relative;
  ${ layout }
  ${ space }
`;

export default ShimmerPlaceholder;
