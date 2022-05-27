import styled from 'styled-components';
import { flexbox } from 'styled-system';

import Section, { SectionProps } from '../../Sections/Section/Section';
import { FlexboxProps } from 'styled-system';

interface FlexSectionProps extends FlexboxProps, SectionProps {}
interface Props {
  src: string;
  alt: string;
}

const StyledSection = styled(Section)<FlexSectionProps>`
  ${flexbox}
`;
const StyledImage = styled.img`
  object-fit: none;
`;


export default function WorksLogo({ src, alt }: Props) {
  return (
    <StyledSection
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={40} 
      bg="gray" 
      textAlign="center" 
      height={200}>
      <StyledImage src={src} alt={alt} />        
    </StyledSection>
  )
}
