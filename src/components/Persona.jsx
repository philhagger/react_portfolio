import React from 'react';
import Bubble from './persona/Bubble';

import './persona/persona.scss';
// import userPicture from './persona/me.jpg';

// const personaImg = {
//   width: '25px',
//   borderRadius: '10px'
// };

const Persona = ({ user, ...props }) => (
  <div className="persona">
    <span {...props} className="persona__text">
      {user.name}
    </span>
    <Bubble name={user.name} />
  </div>
);

export default Persona;
