import styled from 'styled-components';
import { compose, space, color, typography, layout, position } from 'styled-system';

const Section = styled('section')(
  compose(
    space,
    color,
    typography,
    layout,
    position
  )
)

export default Section;

