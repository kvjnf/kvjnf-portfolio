import styled from "styled-components";
import { useRef } from 'react';

import { useOnClickOutSide } from "../../utils/hooks";
import { DropDownContextProvider, useDropDownContext } from "../../../context/DropDownContext";

interface Props {
  children: React.ReactElement;
}

const StyledDropDown = styled.div`
  position: relative;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 4.07142857em;
  padding-right: 1.5em;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  min-height: 1em;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  margin: 0 0.25em 0 0;
  text-transform: none;
  text-shadow: none;
  text-decoration: none;
  border-radius: 0.28571429rem;
  user-select: none;
  background-color: initial;
  transition: box-shadow .5s cubic-bezier(.165,.84,.44,1);
  
  &:hover {
    box-shadow: 0 10px 18px rgb(0 0 0 / 12%);
  }
`;

function DropDownContent({ children }: Props) {
  const ref = useRef(null);
  const { open, setOpen } = useDropDownContext();

  useOnClickOutSide(ref, () => setOpen(false));

  return (
    <StyledDropDown ref={ref} onClick={() => setOpen(!open)}>
      {children}
    </StyledDropDown>
  );
}

export function DropDown({ children }: Props) {
  return (
    <DropDownContextProvider>
      <DropDownContent>
        { children }
      </DropDownContent>
    </DropDownContextProvider>
  );
}
