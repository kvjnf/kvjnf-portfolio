import styled from 'styled-components';
import { typography, variant, space, TypographyProps, SpaceProps } from 'styled-system';

import { theme } from '../../../styles/global';
import { FontVariant, VariantsProps } from '../../../styles/style.interfaces'

interface StyledProps extends TypographyProps, SpaceProps {};
interface Props extends StyledProps {
  fontStyle: FontVariant;
  title: string;
}

const Header = styled.h3<VariantsProps>`
  ${typography}
  ${space}
  ${variant({
    prop: 'fontVariant',
    variants: theme.fontFamilies
  })}
`;

function SectionHeader ({ fontStyle = 'alt', title = '', ...args }: Props) {
  return <Header
    fontVariant={fontStyle}
    fontSize={[16, null, 24]}
    textAlign='center'
    lineHeight='1.2'
    {...args}
    >{title}</Header>
}

export default SectionHeader;
