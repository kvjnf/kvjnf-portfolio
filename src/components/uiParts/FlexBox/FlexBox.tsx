import styled from "styled-components";
import { compose, flexbox, space, layout, SpaceProps, LayoutProps, FlexProps, JustifyContentProps } from "styled-system";

interface FlexBoxProps extends SpaceProps, LayoutProps, FlexProps, JustifyContentProps {};

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${compose(
    flexbox,
    space,
    layout,
  )}
`;

export default FlexBox;
