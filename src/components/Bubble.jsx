import React from 'react';

import InitialsFromName from '../utils/IntialsFromName';
import './Bubble.scss';

const Bubble = ({ name, image, ...props }) => (
  <span className="bubble" {...props}>
    <InitialsFromName name={name} />
  </span>
);

export default Bubble;
