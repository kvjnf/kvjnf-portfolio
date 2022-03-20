import styled from 'styled-components';
import { typography, variant } from 'styled-system';
import { PropTypes } from 'prop-types';

import { theme } from '../../../styles/global';

const Header = styled.h3`
  ${typography}
  ${variant({
    prop: 'fontStyle',
    variants: theme.fontFamilies
  })}
`;

function SectionHeader ({ fontStyle, title }) {
  return <Header
    fontStyle={fontStyle}
    fontSize={[16, null, 24]}
    textAlign='center'
    lineHeight='1.2'
    fontWeight='300'
    >{title}</Header>
}

SectionHeader.propTypes = {
  fontStyle: PropTypes.string,
  title: PropTypes.string.isRequired
}

SectionHeader.defaultProps = {
  fontStyle: 'alt'
}

export default SectionHeader;
