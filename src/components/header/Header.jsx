import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './header.scss';
import Persona from '../Persona/Persona';

const Header = props => (
  <header className="header">
    <div className="header__brand">
      <Link to="/">React Portfolio</Link>
    </div>
    <div className="header__navlinks">
      <NavLink className="navlinks__link" to="/users">
        Users
      </NavLink>
      <NavLink className="navlinks__link" to="/modals">
        Modals
      </NavLink>
      <NavLink className="navlinks__link" to="/films">
        Components
      </NavLink>
      <NavLink className="navlinks__link" to="/games">
        Inputs
      </NavLink>
    </div>
    <div className="header__persona">
      <Persona user={props.user} />
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.object.isRequired
};

export default Header;
