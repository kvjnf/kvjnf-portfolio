import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { PropTypes } from 'prop-types';
import Section from '../../Sections/Section/Section';

const StyledSection = styled(Section)`
  ${flexbox}
`;

const StyledImage = styled.img`
  object-fit: none;
`;
export default function WorksLogo({ src, alt }) {
  return (
    <StyledSection
      display="flex"
      justifyContent="center"
      alignContent="center"
      mb={40} 
      bg="gray" 
      textAlign="center" 
      height={200}>
      <StyledImage src={src} alt={alt} />        
    </StyledSection>
  )
}

WorksLogo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
