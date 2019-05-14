import React from 'react';
import { Link } from 'react-router-dom';
import SvgLogo from './SvgLogo';
import IconLink from './IconLink';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const renderLogo = () => {
    return (
      <header id="header" className="open">
        <Link to="/">
          <h1>
            <SvgLogo />
          </h1>
        </Link>
        <div className="header-icon-links">
          <IconLink
            link="https://www.linkedin.com/in/daisuke-akiyama-5b0222120/"
            bgc="#0073b1"
            iconName="fa-linkedin-in"
          />
          <IconLink
            link="https://github.com/kvjnf/kvjnf-portfolio"
            bgc="#000"
            iconName="fa-github"
          />
        </div>
        <LanguageSelector />
      </header>
    );
  };

  return renderLogo();
}
