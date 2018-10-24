import React from 'react';

import InitialsFromName from '../../Utils/IntialsFromName';
import './bubble.scss';

const Bubble = ({ name, ...props }) => (
  <span className="bubble" {...props}>
    <InitialsFromName name={name} />
  </span>
);

export default Bubble;
