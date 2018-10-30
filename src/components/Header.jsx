import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './header/header.scss';
import Persona from './Persona';

const Header = props => (
  <div className="header">
    <div className="header__brand">
      <Link to="/">Is this for me?</Link>
    </div>
    <div className="header__navlinks">
      <NavLink className="navlinks__link" to="/tv">
        TV
      </NavLink>
      <NavLink className="navlinks__link" to="/films">
        Films
      </NavLink>
      <NavLink className="navlinks__link" to="/games">
        Games
      </NavLink>
    </div>
    <div className="header__persona">
      <Persona user={props.user} />
    </div>
  </div>
);

export default Header;
