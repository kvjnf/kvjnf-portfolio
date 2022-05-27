import styled from "styled-components";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { theme } from "../../styles/global";
import SVGAnimationLogo from "../../uiParts/SVGAnimationLogo/SvgAnimationLogo";
import FlexBox from '../../uiParts/FlexBox/FlexBox';
import { FaPortalLinkIcon } from '../../uiParts/FaPortalLinkIcon/FaPortalLinkIcon';
// import { LanguageSelector } from "../../uiParts/LanguageSelector/LanguageSelector";

const StyledHeader = styled.header`
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  
  ${theme.media.md`
    margin-top: 60px;
    margin-bottom: 60px;
  `}
`;
const StyledFlexBox = styled(FlexBox)`
  gap: 25px;
  margin-bottom: 30px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link to='/'>
          <SVGAnimationLogo />
        </Link>
      </h1>
      <StyledFlexBox 
        justifyContent='center'
        >
        <FaPortalLinkIcon 
          faIcon={faGithub as IconDefinition} 
          bgc='#000000'
          link='https://github.com/kvjnf/kvjnf-portfolio'
          />
        <FaPortalLinkIcon 
          faIcon={faLinkedinIn as IconDefinition}
          bgc='#0073b1'
          link='https://www.linkedin.com/in/daisuke-akiyama-5b0222120'
        />
      </StyledFlexBox>
      {/* <LanguageSelector /> */}
    </StyledHeader>
  )
}
