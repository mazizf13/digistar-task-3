import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#009EA9] text-white py-3 px-5 rounded-lg text-[16px] font-medium hover:bg-[#009EA9] transition">
      {text}
    </button>
  );
};

export default Button;
