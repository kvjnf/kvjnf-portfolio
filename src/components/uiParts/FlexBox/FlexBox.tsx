import styled from "styled-components";
import { compose, flexbox, space, layout, SpaceProps, LayoutProps, FlexProps } from "styled-system";

interface FlexBoxProps extends SpaceProps, LayoutProps, FlexProps {}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${compose(
    flexbox,
    space,
    layout,
  )}
`;

export default FlexBox;
