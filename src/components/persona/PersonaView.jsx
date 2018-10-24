import React from 'react';
import { Link } from 'react-router-dom';
import Bubble from '../Bubble';

import './persona.scss';
// import userPicture from './persona/me.jpg';

// const personaImg = {
//   width: '25px',
//   borderRadius: '10px'
// };

const Persona = ({ user, ...props }) => (
  <div className="persona">
    <span {...props} className="persona__text">
      <Link to="/user">{user.name}</Link>
    </span>
    <Bubble name={user.name} />
  </div>
);

export default Persona;
