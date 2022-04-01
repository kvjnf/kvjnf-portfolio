import styled from "styled-components";
import { createContext, useContext, useRef } from 'react';
import { variant } from "styled-system";
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useOnClickOutSide } from "../../utils/hooks";
import { theme } from "../../styles/global";


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

export const DropDownContext = createContext();

export function DropDown({ children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutSide(ref, () => setOpen(!open));

  return (
    <StyledDropDown ref={ref} onClick={() => setOpen(!open)}>
      <DropDownContext.Provider value={open}>
        { children }
      </DropDownContext.Provider>
    </StyledDropDown>
  );
}

DropDown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const StyledDropDownMenu = styled.div`
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

export function DropDownMenu({ children }) {
  const open = useContext(DropDownContext);
  
  return (
    <StyledDropDownMenu open={open}>
      { children }
    </StyledDropDownMenu>
  );
}

DropDownMenu.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
}

const StyledDropDownItem = styled.div`
  display: flex;
  gap: 0 15px;
  cursor: pointer;
  border: none;
  height: auto;
  border-top: none;
  line-height: 1em;
  padding: 0.78571429rem 1.14285714rem;
  ${variant({ prop: 'fontStyle', variants: theme.fontFamilies })}
  align-items: center;

  &:hover {
    background-color: #e8eaed;
  }
`;

export function DropDownItem({ fontStyle, onClick, children }) {
  
  return (
    <StyledDropDownItem 
      fontStyle={fontStyle}
      onClick={onClick?? (() => {})}
    >
      { children }
    </StyledDropDownItem>
  )
}

DropDownItem.propTypes = {
  fontStyle: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}
