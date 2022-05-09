import styled from 'styled-components';

import { ButtonBase } from '../../styles/button';
import { FontVariant } from '../../styles/style.interfaces';

interface Props {
  text: string;
  link: string;
  color: string;
  fontStyle: FontVariant;
}

const BasicBlankLink = styled.a`
  ${ButtonBase}
`;

export default function BlankLinkBtn({ text, link, color = 'black', fontStyle = 'alt' }: Props) {
  return (
    <BasicBlankLink
      width={240}
      height={40}
      color={color}
      fontVariant={fontStyle}
      href={link}
      className="link_btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </BasicBlankLink>
  );
}
