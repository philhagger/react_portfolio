import React from 'react';

const InitialsFromName = ({ name = 'Anonymous User' }) => {
  let output = name.split(' ');
  return (
    <span>
      {output[0][0]}
      {output[1][0]}
    </span>
  );
};

export default InitialsFromName;
