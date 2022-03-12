import { createGlobalStyle, css } from 'styled-components';

const black = '#222';

export const theme = {
  colors: {
    black
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
