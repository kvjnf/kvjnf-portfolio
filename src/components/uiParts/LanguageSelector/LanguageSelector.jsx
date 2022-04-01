import ReactCountryFlag from "react-country-flag"
import { PropTypes } from 'prop-types';
import styled from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { variant } from 'styled-system';

import { DropDown, DropDownMenu, DropDownItem } from "../DropDown/DropDown";
import { theme } from '../../styles/global';

const languages = { 'jp': 'Japanese', 'gb': 'English' };

const FaGlobeIcon = styled(FontAwesomeIcon)`
  color: #183153;
  display: inline-block;
  position: absolute;
  height: 100%;
  line-height: 1;
  border-radius: 0;
  top: 0;
  left: 1rem;
  width: 20px;
`;

const Flag = styled(ReactCountryFlag)`
  display: inline-block;
  width: 1.8em !important;
  height: 1.8em !important;
`;

const CurrentLanguage = styled.span`
  letter-spacing: 3px;
  cursor: pointer;
  position: relative;
  left: 1px;
  z-index: 3;
  display: inline-block;
  font-size: 14px !important;
  ${variant({ prop: 'fontStyle', variants: theme.fontFamilies })}
`;

function PureLangageSelector({ lang, onLanguageChange }) {

  return (
    <DropDown>
      <FaGlobeIcon icon={faGlobe} />
      <CurrentLanguage fontStyle='alt'>
        {lang.toUpperCase()}
      </CurrentLanguage>
      <DropDownMenu>
        { Object.keys(languages).map(country => (
          <DropDownItem
            key={`id-${country}`}
            fontStyle='alt'
            onClick={() => onLanguageChange(country)}
            >
            <Flag 
              countryCode={country} 
              aria-label={languages[country]}
              alt={languages[country]}
              svg
            />
            <span>{languages[country]}</span>
          </DropDownItem>
        )) }
      </DropDownMenu>
    </DropDown>
  );
}

PureLangageSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func
}

PureLangageSelector.defaultProps = {
  lang: 'jp',
}

export default PureLangageSelector;
