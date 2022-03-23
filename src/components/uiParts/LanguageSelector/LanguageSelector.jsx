import ReactCountryFlag from "react-country-flag"
import { PropTypes } from 'prop-types';
import styled from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { variant } from 'styled-system';
import { theme } from '../../styles/global';

const languages = { 'jp': 'Japanese', 'gb': 'English' };

const DropDown = styled.div`
  position: relative;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 4.07142857em;
  padding-right: 1.5em;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  min-height: 1em;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  margin: 0 0.25em 0 0;
  text-transform: none;
  text-shadow: none;
  text-decoration: none;
  border-radius: 0.28571429rem;
  user-select: none;
  background-color: initial;
  transition: box-shadow .5s cubic-bezier(.165,.84,.44,1);
  
  &:hover {
    box-shadow: 0 10px 18px rgb(0 0 0 / 12%);
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 120%;
  left: 1rem;
  margin-top: 0.5em;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)!important;
  backface-visibility: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: opacity .1s ease;
  z-index: 11;
  will-change: transform,opacity;
  border: 1px solid rgba(34,36,38,.15);
  margin: 0;
  padding: 0 0;
  background: #fff;
  -webkit-tap-highlight-color: transparent;
  visibility: ${(props) => props.open ? "visible" : "hidden"};
  background-color: #f1f3f4;
`;

const DropDownItem = styled.div`
  display: flex;
  gap: 0 15px;
  cursor: pointer;
  border: none;
  height: auto;
  border-top: none;
  line-height: 1em;
  padding: 0.78571429rem 1.14285714rem;
  ${variant({ prop: 'fontStyle', variants: theme.fontFamilies })}
  align-items: center;
`;

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

function PureLangageSelector({ lang, open }) {
  return (
    <DropDown>
      <FaGlobeIcon icon={faGlobe} />
      <CurrentLanguage fontStyle='alt'>{lang.toUpperCase()}</CurrentLanguage>
      <DropDownMenu open={open}>
        { Object.keys(languages).map(country => (
          <DropDownItem fontStyle='alt'>
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
  open: PropTypes.bool.isRequired,
}

PureLangageSelector.defaultProps = {
  lang: 'jp',
  open: false,
}

export default PureLangageSelector;
