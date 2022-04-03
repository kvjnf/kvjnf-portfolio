import styled from "styled-components";
import { compose, flexbox, space, layout } from "styled-system";

const FlexBox = styled('div')(
  compose(
    flexbox,
    space,
    layout,
  )
)

export default FlexBox;
