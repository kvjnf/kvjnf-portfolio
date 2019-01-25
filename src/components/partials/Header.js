import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logos/logo3.svg';

const Header = () => {
  return (
    <header id="header">
      <Link to="/">
        <h1>
          <Logo />
        </h1>
      </Link>
    </header>
  );
};

export default Header;
