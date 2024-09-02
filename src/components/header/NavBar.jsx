import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("dark-mode");
    alert("Anda telah logout. Silakan login kembali.");
    window.location.reload();
    navigate("/login");
  };

  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  const isLoginPage = pathname === "/login";

  return (
    <nav
      className={`sticky top-0 z-50 border-b ${isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"}`}
    >
      <div className="flex items-center justify-between lg:px-20 xl:px-40 px-10 py-3">
        <div className="max-h-[87px] xl:w-52 w-fit">
          <img
            src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo_PADI_UMKM.cc043879.svg&w=128&q=100"
            alt="Logo"
          />
        </div>

        <button
          onClick={handleMenuToggle}
          className={`lg:hidden p-2 rounded-full flex items-center justify-center focus:outline-none ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <ul
          className={`lg:flex hidden space-x-10 items-center ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
        >
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/beranda" ? "active-link" : ""}`}
            >
              <Link to="/beranda">Beranda</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/about-us" ? "active-link" : ""}`}
            >
              <Link to="/about-us">Tentang Kami</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/help" ? "active-link" : ""}`}
            >
              <Link to="/help">Bantuan</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/media" ? "active-link" : ""}`}
            >
              <Link to="/media">Media</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/contact" ? "active-link" : ""}`}
            >
              <Link to="/contact">Kontak</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <div className="border-[1px] border-[#009EA9] rounded-lg px-3 py-2 text-[#009EA9] cursor-pointer">
              <Link to="/shop">Belanja di PaDi UMKM</Link>
            </div>
          </li>
          {isAuthenticated && !isLoginPage && (
            <li className="group cursor-pointer">
              <div className="border-[1px] border-[#009EA9] bg-[#009EA9] rounded-lg px-3 py-2 cursor-pointer">
                <button onClick={handleLogout} className=" text-white">
                  Logout
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-${isDarkMode ? "gray-900" : "white"} ${isDarkMode ? "text-gray-300" : "text-gray-800"} transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} z-50 p-4`}
        style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
      >
        <ul className="space-y-4">
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/beranda" ? "active-link" : ""}`}
            >
              <Link to="/beranda">Beranda</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/about-us" ? "active-link" : ""}`}
            >
              <Link to="/about-us">Tentang Kami</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/help" ? "active-link" : ""}`}
            >
              <Link to="/help">Bantuan</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/media" ? "active-link" : ""}`}
            >
              <Link to="/media">Media</Link>
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              className={`hover:text-[#009EA9] text-[18px] ${pathname === "/contact" ? "active-link" : ""}`}
            >
              <Link to="/contact">Kontak</Link>
            </span>
          </li>
          <div className="border-[1px] border-[#009EA9] rounded-lg px-3 py-2 text-[#009EA9] cursor-pointer">
            <Link to="/shop">Belanja di PaDi UMKM</Link>
          </div>
          {isAuthenticated && !isLoginPage && (
            <li className="group cursor-pointer">
              <div className="border-[1px] border-[#009EA9] bg-[#009EA9] rounded-lg px-3 py-2 cursor-pointer">
                <button onClick={handleLogout} className=" text-white">
                  Logout
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>

      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-4 right-4 p-2 rounded-full flex items-center justify-center shadow-lg ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"} focus:outline-none`}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-slate-400" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
