import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HoverBgFillButton, InnerText, ArrowInnerText } from '../../styles/button';

const Button = styled.a`
  ${HoverBgFillButton}
`;

function BlankLinkHoverBtn({ text, link, color, fontStyle, isArrow }) {
  const Inner = isArrow ? ArrowInnerText : InnerText;

  return (
    <Button
      width={240}
      height={40}
      color={color}
      borderColor={color}
      fontStyle={fontStyle}
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

BlankLinkHoverBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  fontStyle: PropTypes.string,
  arrow: PropTypes.bool
};

BlankLinkHoverBtn.defaultProps = {
  color: 'black',
  fontStyle: "alt",
  isArrow: false
}

export default BlankLinkHoverBtn;
