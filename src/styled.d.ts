// import original module declarations
import 'styled-components';

type Colors = Record<'black'|'gray', string>;
type Media = Record<'sm'|'md'|'lg'|'xl', string>

interface FontFamiliesDefault{
  fontFamily: string;
  fontSize: string;
}
interface FontFamilesAlt extends FontFamiliesDefault{
  fontWeight: number;
  letterSpacing: string;
  fontStyle: string;
}
interface FontFamilies {
  default: FontFamiliesDefault;
  alt: FontFamilesAlt;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fill: Colors;
    borderColor: Colors;
    fontFamilies: FontFamilies;
    fontSizes: string[];
    breakpoints: string[];
    media: Media;
  }
}
