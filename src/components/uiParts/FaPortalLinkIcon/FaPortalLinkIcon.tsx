import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconLinkProps {
  bgc: string;
}
interface IconInnerProps {
  bgc: string;
}
interface Props {
  link: string;
  bgc: string;
  faIcon: IconDefinition;
}

const IconLink = styled.a<IconLinkProps>`
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  border: solid 1px #999;
  box-sizing: border-box;
  transform: rotate(45deg);
  transition: border 0.1s linear;
  &:hover {
    border: solid 1px ${props => props.bgc};
    cursor: pointer;
  }
`;
const IconInner = styled.span<IconInnerProps>`
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background-color: #ccc;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgc};
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
  ${IconLink}:hover &::before {
    transform: scale(1);
  }
`;
const FaIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  height: 70%;
  transform: rotate(-45deg);
  color: #fff;
`;

export function FaPortalLinkIcon({ link, bgc, faIcon }: Props) {
  return (
    <IconLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      bgc={bgc}
      >
      <IconInner bgc={bgc}>
        <FaIcon icon={faIcon}/>
      </IconInner>
    </IconLink>
  )
};
