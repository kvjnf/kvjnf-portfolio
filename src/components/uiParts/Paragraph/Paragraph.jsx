import styled from 'styled-components';
import { variant, typography, space, layout, compose } from "styled-system";
import { PropTypes } from 'prop-types';
import { nl2br } from '../../utils/index';
import { theme } from '../../styles/global';

const StyledParagraph = styled('p')(
  compose(
    typography,
    space,
    layout
  ),
  variant({
    prop: 'fontStyle',
    variants: theme.fontFamilies
  })
)

export default function Paragraph ({ texts }) {
  return (
    <StyledParagraph
      width={['100%', 700]}
      lineHeight="2em"
      mx="auto"
      my={0}
      fontStyle="default"
    >
      { nl2br(texts) }
    </StyledParagraph>
  )  
};

Paragraph.propTypes = {
  texts: PropTypes.string.isRequired
}
