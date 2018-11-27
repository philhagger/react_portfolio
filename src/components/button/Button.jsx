import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

/**
 * This is a Button component with default styling.
 */
export const Button = ({ type = 'button', className, disable = false, ...props }) => <button type={type} className={`btn btn--pulse ${className} ${disable ? 'btn--disabled' : null}`} disabled={disable} {...props} />;

Button.propTypes = {
  /**
   * Type of button - submit|reset|button
   */
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.string
};

export const PrimaryButton = ({ className, ...props }) => <Button className={`btn btn--primary ${className}`} {...props} />;

export const SecondaryButton = props => <Button className="btn btn--secondary" {...props} />;

export default Button;
