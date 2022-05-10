import styled from "styled-components";
import { space, SpaceProps, variant } from "styled-system";

import { FontVariantProps } from "../../styles/style.interfaces";
import { theme } from '../../styles/global';

interface StyledProps extends SpaceProps, FontVariantProps {}
interface Props extends StyledProps {
  text: string;
}

const StyledHeader2 = styled.h2<StyledProps>`
  font-size: 24px;
  text-align: center;
  ${variant({
    prop: 'fontVariant',
    variants: theme.fontFamilies
  })}
  ${space}
`;

export default function SectionHeader2({ text, ...args }: Props) {
  const defaultSpace = { mb: [10, 60], ...args }

  return (
    <StyledHeader2
      {...defaultSpace}
    >
      { text }
    </StyledHeader2>
  )
}