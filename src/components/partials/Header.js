import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Portfolio from '../../logos/logo3.svg';
import IconLink from './IconLink';
import LanguageSelector from './LanguageSelector';

function Header({ initial }) {
  const logoOpen = initial.isRemoved ? 'open' : '';
  const renderLogo = () => {
    if (!initial.imgReady) {
      return null;
    }
    return (
      <header id="header" className={logoOpen}>
        <Link to="/">
          <h1>
            <Portfolio open={initial.isRemoved} />
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

Header.propTypes = {
  initial: PropTypes.object
};

function mapStateToProps(state) {
  const { initial } = state;
  return { initial };
}

export default connect(
  mapStateToProps,
  null
)(Header);
