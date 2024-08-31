import React from "react";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Layout = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col`}
    >
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
