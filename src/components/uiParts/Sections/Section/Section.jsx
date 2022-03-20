import styled from 'styled-components';
import { compose, space, color, typography } from 'styled-system';

const Section = styled('section')(
  compose(
    space,
    color,
    typography,
  )
)

export default Section;

