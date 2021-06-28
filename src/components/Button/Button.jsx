import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, type, handleClick, children }) => (
  <button className={`button is-${color}`} type={type} onClick={handleClick}>
    {children}
  </button>
);

const buttonStyles = ["primary", "secondary"];

Button.propTypes = {
  color: PropTypes.oneOf(buttonStyles),
  type: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: "primary",
  type: "button",
};

export default Button;
