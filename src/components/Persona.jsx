import React from 'react';
import { Link } from 'react-router-dom';
import Bubble from './Bubble';

import './persona/persona.scss';

const Persona = ({ user, ...props }) => (
  <div className="persona">
    <span {...props} className="persona__text">
      <Link to="/userprofile">
        {user.firstName} {user.lastName}
      </Link>
    </span>
    <Bubble name={`${user.firstName} ${user.lastName}`} />
  </div>
);

export default Persona;
