import React from 'react';
import Bubble from './persona/Bubble';

import './persona/persona.scss';
// import userPicture from './persona/me.jpg';

// const personaImg = {
//   width: '25px',
//   borderRadius: '10px'
// };

const Persona = ({ user, initials, ...props }) => (
  <div className="persona">
    <span {...props} className="persona__text">
      {user.name}
    </span>
    <Bubble initials={initials} />
  </div>
);

export default Persona;
