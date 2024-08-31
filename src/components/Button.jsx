import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, variant = "primary" }) => {
  const baseStyles = "py-3 px-5 rounded-lg text-[16px] font-medium transition";

  const variantStyles = {
    primary: "bg-[#009EA9] text-white hover:bg-[#007F87]",
    outline:
      "border border-[#009EA9] text-[#009EA9] hover:bg-[#009EA9] hover:text-white",
  };

  const styles = `${baseStyles} ${variantStyles[variant]}`;

  return <button className={styles}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "outline"]),
};

export default Button;
