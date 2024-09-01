import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Store = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex justify-center items-center w-full h-[100vh] ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <button
        className={`px-6 py-3 rounded-lg font-semibold ${
          isDarkMode
            ? "bg-[#009EA9] text-white hover:bg-[#007C89]"
            : "bg-[#009EA9] text-white hover:bg-[#007C89]"
        }`}
      >
        <a href="https://padiumkm.id" rel="noopener noreferrer">
          Belanja di PaDi UMKM
        </a>
      </button>
    </div>
  );
};

export default Store;
