import React from "react";
import styled from "styled-components";

import { useDropDownContext } from "../../../../context/DropDownContext";

interface StyledDropDownMenuProps {
  open: boolean;
}
interface Props {
  children: React.ReactElement[];
}

const StyledDropDownMenu = styled.div<StyledDropDownMenuProps>`
  position: absolute;
  top: 120%;
  left: 1rem;
  margin-top: 0.5em;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)!important;
  backface-visibility: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: opacity .1s ease;
  z-index: 11;
  will-change: transform,opacity;
  border: 1px solid rgba(34,36,38,.15);
  margin: 0;
  padding: 0 0;
  background: #fff;
  -webkit-tap-highlight-color: transparent;
  visibility: ${(props) => props.open ? "visible" : "hidden"};
  background-color: #f1f3f4;
`;

export function DropDownMenu({ children }: Props) {
  const { open } = useDropDownContext();

  return (
    <StyledDropDownMenu open={open}>
      { children }
    </StyledDropDownMenu>
  );
}
