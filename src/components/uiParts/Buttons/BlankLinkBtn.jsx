import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonBase } from '../../styles/button';

const BasicBlankLink = styled.a`
  ${ButtonBase}
`;

function BlankLinkBtn({ text, link, color, fontStyle }) {
  return (
    <BasicBlankLink
      width={240}
      height={40}
      color={color}
      fontStyle={fontStyle}
      href={link}
      className="link_btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </BasicBlankLink>
  );
}

BlankLinkBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
};

BlankLinkBtn.defaultProps = {
  color: 'black',
  fontStyle: "alt"
}

export default BlankLinkBtn;
