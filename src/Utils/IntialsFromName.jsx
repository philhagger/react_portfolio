// import React from 'react';

// const InitialsFromName = ({ name = 'Anonymous User' }) => {
//   let output = name.split(' ');
//   return (
//     <span>
//       {output[0][0].toUpperCase()}
//       {output[1][0].toUpperCase()}
//     </span>
//   );
// };

// export default InitialsFromName;

const InitialsFromName = ({ name = 'Anonymous User' }) => {
  let output = name.split(' ');
  return `${output[0][0].toUpperCase()}${output[1][0].toUpperCase()}`;
};

export default InitialsFromName;
