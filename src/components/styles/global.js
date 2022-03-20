import { createGlobalStyle, css } from 'styled-components';

export const black = '#222';
export const gray = '#f8f8f8';

const mediaQuery = point => (...args) => css`
  @media (max-width: ${point}) {
    ${css(...args)}
  }
`;

const breakpoints = ['640px', '768px', '1024px', '1280px'];

export const theme = {
  colors: {
    black,
    gray,
  },
  fill: {
    black
  },
  borderColor: {
    black
  },
  fontFamilies: {
    default: {
      fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
      fontSize: "14px"
    },
    alt: {
      fontFamily: "'Montserrat', sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "4px",
      fontSize: "12px"
    }
  },
  fontSizes: ['12px', '14px', '16px', '18px', '20px', '23px'],
  breakpoints,
  media: {
    sm: mediaQuery(breakpoints[0]),
    md: mediaQuery(breakpoints[1]),
    lg: mediaQuery(breakpoints[2]),
    xl: mediaQuery(breakpoints[3]),
  }
};

export const GlobalCss = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.6em;
    font-size: ${props => props.theme.fontSizes[1]};
    color: ${props => props.theme.colors.black};
  }
  a {
    text-decoration: none;
  }
`
