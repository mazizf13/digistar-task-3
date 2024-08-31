import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`bg-[#F6F9FC] ${isDarkMode ? "bg-gray-800" : "bg-[#F6F9FC]"}`}
    >
      <div
        className={`text-[#5C5C6B] py-6 text-center mx-10 ${isDarkMode ? "text-gray-400" : ""}`}
      >
        <div className="text-paletteText-inactive text-base">
          © {currentYear}{" "}
          <a
            href="https://padiumkm.id"
            target="_blank"
            className={`hover:underline ${isDarkMode ? "hover:text-[#009EA9]" : "hover:text-[#009EA9]"}`}
          >
            Pasar Digital UMKM Indonesia
          </a>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
