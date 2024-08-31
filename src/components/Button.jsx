import React from "react";
import PropTypes from "prop-types";
import { useDarkMode } from "../contexts/DarkModeContext";

const Button = ({ text, variant = "primary" }) => {
  const { isDarkMode } = useDarkMode();
  const baseStyles = "py-3 px-5 rounded-lg text-[16px] font-medium transition";

  const variantStyles = {
    primary: `${isDarkMode ? "bg-gray-600 text-white" : "bg-[#009EA9] text-white"} hover:bg-[#007F87]`,
    outline: `bg-transparent border ${isDarkMode ? "border-gray-400 text-slate-100" : "border-[#009EA9] text-[#009EA9]"} hover:bg-[#009EA9] hover:text-white`,
  };

  const styles = `${baseStyles} ${variantStyles[variant]}`;

  return <button className={styles}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "outline"]),
};

export default Button;
