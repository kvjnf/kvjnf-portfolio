import React from 'react';
import styled from 'styled-components';
import { 
  compose, 
  space, 
  color, 
  typography, 
  layout, 
  position, 
  SpaceProps, 
  ColorProps, 
  TypographyProps, 
  LayoutProps, 
  PositionProps,
} from 'styled-system';


export interface SectionProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps, PositionProps {
  children: React.ReactNode;
}

const Section = styled('section')<SectionProps>(
  compose(
    space,
    color,
    typography,
    layout,
    position
  )
)

export default Section;

