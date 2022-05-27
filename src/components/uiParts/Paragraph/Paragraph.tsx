import styled from 'styled-components';
import { 
  variant,
  typography,
  space,
  layout,
  compose,
  SpaceProps,
  TypographyProps,
  LayoutProps,
} from "styled-system";

import { nl2br } from '../../utils/index';
import { theme } from '../../styles/global';
import { FontVariantProps } from '../../styles/style.interfaces';

interface StyledProps extends TypographyProps, SpaceProps, LayoutProps, FontVariantProps {};
interface Props extends StyledProps {
  texts: string;
}

const StyledParagraph = styled('p')<StyledProps>(
  variant({
    prop: 'fontVariant',
    variants: theme.fontFamilies
  }),
  compose(
    typography,
    space,
    layout
  ),
)

export default function Paragraph ({ texts, ...args }: Props) {
  return (
    <StyledParagraph
      width={['100%', 700]}
      lineHeight="2em"
      mx="auto"
      my={0}
      fontVariant="default"
      {...args}
    >
      { nl2br(texts) }
    </StyledParagraph>
  )  
};
