import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag"
import styled from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { variant } from 'styled-system';

import { DropDown } from "../DropDown/DropDown";
import { DropDownMenu } from "../DropDown/DropDownMenu/DropDownMenu";
import { DropDownItem } from "../DropDown/DropDownItems/DropDownItems";
import { theme } from '../../styles/global';
import { getPriorityLanguage } from "../../utils";
import { FontVariant } from "../../styles/style.interfaces";

interface Languages {
  jp: string;
  gb: string;
}
interface CurrentLanguageProps {
  fontVariant: FontVariant;
}
interface Props {
  lang: string;
  onLanguageChange: (lang: string) => void;
}

const languages: Languages = { jp: 'Japanese', gb: 'English' };
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
const CurrentLanguage = styled.span<CurrentLanguageProps>`
  letter-spacing: 3px;
  cursor: pointer;
  position: relative;
  left: 1px;
  z-index: 3;
  display: inline-block;
  font-size: 14px !important;
  ${variant({ prop:'fontVariant', variants: theme.fontFamilies })}
`;

export function PureLangageSelector({ lang = 'jp', onLanguageChange }: Props) {
  return (
    <DropDown>
      <FaGlobeIcon icon={faGlobe as IconProp} />
      <CurrentLanguage fontVariant='alt'>
        {lang.toUpperCase()}
      </CurrentLanguage>
      <DropDownMenu>
        {
          Object.keys(languages).map((country) => {
            const language = languages[country as keyof Languages];
        
            return (
              <DropDownItem
                key={`id-${country}`}
                fontStyle='alt'
                onClick={() => onLanguageChange(country)}
              >
                <Flag 
                  countryCode={country}
                  aria-label={language}
                  alt={language}
                  svg
                />
                <span>{language}</span>
              </DropDownItem>
            )
          })
        }
      </DropDownMenu>
    </DropDown>
  );
}

export function LanguageSelector() {
  const [lang, setLang] = useState('jp');

  useEffect(() => {
    const priorityLang = getPriorityLanguage();

    if (priorityLang === 'ja-JP') {
      setLang('ja');
    }
  }, []);

  /**
   * @todo scroll fix and layout change
   */
  return ( <PureLangageSelector lang={lang} onLanguageChange={() => {}} /> )
}
