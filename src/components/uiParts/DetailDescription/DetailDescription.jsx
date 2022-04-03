import PropTypes from 'prop-types';
import styled from 'styled-components';

import { nl2br } from '../../utils';
import { theme } from '../../styles/global';

const StyledWrapper = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 70px 0;
`;

const StyledDescription = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ${theme.media.lg`
    padding: 20px;
  `}
`;

const StyledHeader = styled.h2`
  font-size: 22px;
  margin-bottom: 25px;
  line-height: 1.6em;
`;

const StyledParagraph1 = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export default function DetailDescription({ title, client, description }) {
  return (
    <StyledWrapper>
      <StyledDescription>
        <StyledHeader>{ title }</StyledHeader>
        <StyledParagraph1>Client: { client }</StyledParagraph1>
        <p>{nl2br(description)}</p>
      </StyledDescription>
    </StyledWrapper>
  )
}

DetailDescription.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
