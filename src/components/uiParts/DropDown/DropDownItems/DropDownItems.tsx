import styled from "styled-components";
import { variant } from "styled-system";

import { theme } from "../../../styles/global";
import { FontVariant } from "../../../styles/style.interfaces";

interface StyledItemProps {
  fontVariant: FontVariant;
}
interface Props {
  fontStyle: FontVariant;
  onClick: () => void;
  children: React.ReactElement[] | React.ReactElement;
}

const StyledDropDownItem = styled.div<StyledItemProps>`
  display: flex;
  gap: 0 15px;
  cursor: pointer;
  border: none;
  height: auto;
  border-top: none;
  line-height: 1em;
  padding: 0.78571429rem 1.14285714rem;
  ${variant({ prop: 'fontVariant', variants: theme.fontFamilies })}
  align-items: center;

  &:hover {
    background-color: #e8eaed;
  }
`;

export function DropDownItem({ fontStyle, onClick, children }: Props) {
  return (
    <StyledDropDownItem 
      fontVariant={fontStyle}
      onClick={onClick?? (() => {})}
    >
      { children }
    </StyledDropDownItem>
  )
}
