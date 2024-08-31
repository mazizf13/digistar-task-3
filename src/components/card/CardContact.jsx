import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const CardContact = ({ cardTitle, children }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`border-[1px] rounded-2xl p-8 h-full w-full min-h-[280px] ${isDarkMode ? "border-gray-700 bg-gray-800 text-white" : "border-[#DDF2E4]"}`}
    >
      <h3 className="text-[22px] font-bold">{cardTitle}</h3>
      {children}
    </div>
  );
};

export default CardContact;
