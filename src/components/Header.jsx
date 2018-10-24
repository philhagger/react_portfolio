import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header.scss';
import PersonaWrapper from '../containers/PersonaWrapper';

const Header = () => (
  <div className="header">
    <Link to="/" className="header__brand">
      Test
    </Link>
    <div className="header__navlinks">
      <NavLink className="navlinks__link" to="/tv">
        TV
      </NavLink>
      <NavLink className="navlinks__link" to="/films">
        Buttons
      </NavLink>
      <NavLink className="navlinks__link" to="/games">
        Games
      </NavLink>
    </div>
    <div className="header__persona">
      <PersonaWrapper />
    </div>
  </div>
);

export default Header;
