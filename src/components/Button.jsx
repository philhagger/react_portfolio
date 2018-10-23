import React from 'react';

import './button/button.scss';

export const Button = ({ className, disabled, ...props }) => <button type="button" className={`btn ${className} ${disabled && 'btn--disabled'}`} {...props} />;
export const PrimaryButton = props => <Button className="btn btn--primary" {...props} />;
export const SecondaryButton = props => <Button className="btn btn--secondary" {...props} />;
