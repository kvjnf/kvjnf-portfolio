import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const IconLinkTag = styled.a`
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
  }
`;

const IconInner = styled.span`
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
  ${IconLinkTag}:hover &::before {
    transform: scale(1);
  }
`;

const FaIcon = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
  color: #fff;
`;

function IconLink({ link, iconName, bgc }) {
  return (
    <IconWrapper className="icon-wrapper">
      <IconLinkTag
        className="icon-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        bgc={bgc}
      >
        <IconInner bgc={bgc}>
          <FaIcon className={`fab ${iconName}`} />
        </IconInner>
      </IconLinkTag>
    </IconWrapper>
  );
}

IconLink.propTypes = {
  link: PropTypes.string,
  iconName: PropTypes.string,
  bgc: PropTypes.string
};

export default IconLink;
