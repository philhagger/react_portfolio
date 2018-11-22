import React from 'react';

import './input.scss';

export const Input = ({ ...props }) => <input className="input" {...props} />;
export const PrimaryInput = ({ ...props }) => <input className="input input--primary" {...props} />;
export const TextArea = ({ ...props }) => <textarea className="input" {...props} />;

export default Input;
