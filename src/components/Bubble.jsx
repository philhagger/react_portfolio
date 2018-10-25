import React from 'react';

import InitialsFromName from '../Utils/IntialsFromName';
import './bubble/bubble.scss';

const Bubble = ({ name, image, ...props }) => (
  <span className="bubble" {...props}>
    <InitialsFromName name={name} />
  </span>
);

export default Bubble;
