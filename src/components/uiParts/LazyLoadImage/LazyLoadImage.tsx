import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from 'usehooks-ts'
import { SpaceProps, LayoutProps } from 'styled-system';

import ShimmerPlaceholder from '../ShimmerPlaceHolder/ShimmerPlaceHolder';
import Picture from '../Picture/Picture';

type Option = 'none' | 'blur' | 'grayscale';

interface StyledImageProps {
  $visible: boolean;
  $loaded: boolean;
  option: Option;
  onLoad: () => void;
}
interface Props extends SpaceProps, LayoutProps{
  src: string;
  alt: string;
  option?: Option;
  threshold?: number;
}

const StyledImage = styled(Picture)<StyledImageProps>`
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: filter 1s;
  width: 100%;
  ${(props) => {
    if (props.option === 'blur') {
      return `filter: blur(${props.$loaded ? '0' : '10px'});`;
    } else if (props.option === 'grayscale') {
      return `filter: grayscale(${props.$loaded ? '0%' : '100%'});`;
    }
  }} 
`;

export default function LazyLoadImage({ src, alt, width, height, option = 'none', threshold = 0.5, ...args }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '0px',
    threshold,
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
        $visible={isVisible}
        $loaded={loaded}
        onLoad={onLoad}
        option={option}
      />
    }
    </div>
  )
}
