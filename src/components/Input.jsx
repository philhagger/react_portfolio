import React from 'react';

import './input/input.scss';

export const Input = ({ ...props }) => <input className="input" {...props} />;
export const PrimaryInput = ({ ...props }) => <input className="input input--primary" {...props} />;

export default Input;
