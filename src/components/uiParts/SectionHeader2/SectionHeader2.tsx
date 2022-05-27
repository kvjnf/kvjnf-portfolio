import styled from "styled-components";
import { space, SpaceProps, variant } from "styled-system";

import { FontVariantProps } from "../../styles/style.interfaces";

interface StyledProps extends SpaceProps, FontVariantProps {}
interface Props extends StyledProps {
  text: string;
}

const StyledHeader2 = styled.h2<StyledProps>`
  ${(props) => variant({
    prop: 'fontVariant',
    variants: props.theme.fontFamilies
  })}

  font-size: 24px;
  text-align: center;
  ${space}
`;

export default function SectionHeader2({ text, ...args }: Props) {
  const defaultSpace = { mb: [10, 60], ...args }

  return (
    <StyledHeader2
      fontVariant="alt"
      {...defaultSpace}
    >
      { text }
    </StyledHeader2>
  )
}