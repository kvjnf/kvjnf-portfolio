import styled from 'styled-components';
import { compose, space, color, typography, layout } from 'styled-system';

const Section = styled('div')(
  compose(
    space,
    color,
    typography,
    layout,
  )
)

export default Section;

