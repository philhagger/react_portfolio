import React from 'react';
import PropTypes from 'prop-types';

import './button/button.scss';

/**
 * This is a Button component with default styling.
 */
export const Button = ({ type = 'button', className, disabled = false, ...props }) => <button type={type} className={`btn ${className} ${!disabled || 'btn--disabled'}`} {...props} />;

Button.propTypes = {
  /**
   * Type of button - submit|reset|button
   */
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.string
};

export const PrimaryButton = props => <Button className="btn btn--primary" {...props} />;

export const SecondaryButton = props => <Button className="btn btn--secondary" {...props} />;

export default Button;
