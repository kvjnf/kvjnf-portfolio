import styled, { css } from "styled-components";
import { color, border, layout, variant, ColorProps, LayoutProps, BorderProps } from "styled-system";

import { theme } from "./global";
import { FontVariantProps } from "./style.interfaces";

interface BaseProps extends ColorProps, LayoutProps, FontVariantProps, BorderProps{}

export const ButtonBase = css<BaseProps>`
  ${color}
  ${layout}
  ${variant({ prop: 'fontVariant', variants: theme.fontFamilies})}
  line-height: 40px;
  display: block;
  border: 1px solid;
  ${border}
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;

export const HoverBgFillButton = css`
  ${ButtonBase}
  transition: all 0.3s ease-in-out;
  
  &:hover{
    color: #fff !important;
    &:after{
      left: 0%;
    }
  }

  &:after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: -100%;
    top: 0;
    background-color: ${props => props.theme.fill.black};
    transition: all 0.3s ease-in-out;
    z-index: 0;
  }
`;

export const InnerText = styled.span`
    display: block;
    position: relative;
    z-index: 1;
`;

export const ArrowInnerText = styled(InnerText)`
  padding-left: 10px;

  &:after{
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-top: 2px solid ${props => props.theme.fill.black};
    border-right: 2px solid ${props => props.theme.fill.black};
    border-color: #fff;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -4px;
    transition: all 0.3s ease;
  }
`;
