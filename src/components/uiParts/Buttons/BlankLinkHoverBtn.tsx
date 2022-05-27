import styled from 'styled-components';

import { FontVariant } from '../../styles/style.interfaces';
import { HoverBgFillButton, InnerText, ArrowInnerText } from '../../styles/button';

interface Props {
  text: string;
  link: string;
  color?: string;
  fontStyle?: FontVariant;
  isArrow?: boolean;
}

const Button = styled.a`
  ${HoverBgFillButton}
`;

export default function BlankLinkHoverBtn({ 
  text, 
  link, 
  color = 'black', 
  fontStyle = 'alt', 
  isArrow = false 
}: Props) {
  const Inner = isArrow ? ArrowInnerText : InnerText;

  return (
    <Button
      width={240}
      height={40}
      color={color}
      borderColor={color}
      fontVariant={fontStyle}
      href={link}
      className="link_btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Inner>
        {text}
      </Inner>
    </Button>
  );
}
