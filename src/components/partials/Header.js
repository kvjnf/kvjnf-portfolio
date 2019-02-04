import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../../logos/logo3.svg';

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1>
          <Portfolio />
        </h1>
      </Link>
    </header>
  );
}
