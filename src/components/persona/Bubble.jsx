import React from 'react';

import './bubble/bubble.scss';

const Bubble = ({ initials, ...props }) => (
  <span className="bubble" {...props}>
    {initials}
  </span>
);

export default Bubble;
