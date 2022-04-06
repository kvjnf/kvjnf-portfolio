import styled from "styled-components";
import { compose, flexbox, space, layout } from "styled-system";

const FlexBox = styled.div`
  display: flex;
  ${compose(
    flexbox,
    space,
    layout,
  )}
`;

export default FlexBox;
