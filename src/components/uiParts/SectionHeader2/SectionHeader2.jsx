import styled from "styled-components";
import { space } from "styled-system";

import { theme } from "../../styles/global";

const StyledHeader2 = styled.h2`
  ${theme.fontFamilies.alt};
  font-size: 24px;
  text-align: center;

  ${space}
`;

export default function SectionHeader2({ text, ...args }) {
  const defaultSpace = { mb: [10, 60], ...args }

  return (
    <StyledHeader2
      {...defaultSpace}
    >
      { text }
    </StyledHeader2>
  )
}