import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Portfolio from '../../logos/logo3.svg';
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
        <div className="github-wrapper">
          <a
            className="github-link"
            href="https://github.com/kvjnf/kvjnf-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="github-inner">
              <i className="fab fa-github" />
            </span>
          </a>
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
