import React from 'react';

import InitialsFromName from '../../Utils/IntialsFromName';
import './bubble/bubble.scss';

const Bubble = ({ name }) => {
  return (
    <span className="bubble">
      <InitialsFromName name={name} />
    </span>
  );
};

export default Bubble;
