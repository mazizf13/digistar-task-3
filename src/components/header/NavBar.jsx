import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="bg-transparent">
      <div className="flex flex-wrap items-center justify-start lg:px-20 xl:px-40 px-10 py-3 relative lg:gap-y-2 gap-y-4 gap-x-4">
        <div className="max-h-[87px] xl:w-52 w-fit">
          <img
            src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo_PADI_UMKM.cc043879.svg&w=128&q=100"
            alt="Logo"
          />
        </div>

        <ul className="lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4 text-[#212427] items-center">
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span
              className={`hover:text-[#009EA9]  text-[18px] text-[#212427] flex items-center ${
                pathname === "/beranda" ? "active-link" : ""
              }`}
            >
              <Link to="/beranda">Beranda</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span
              className={`hover:text-[#009EA9]  text-[18px] text-[#212427] flex items-center ${
                pathname === "/about-us" ? "active-link" : ""
              }`}
            >
              <Link to="/about-us">Tentang Kami</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span
              className={`hover:text-[#009EA9]  text-[18px] text-[#212427] flex items-center ${
                pathname === "/help" ? "active-link" : ""
              }`}
            >
              <Link to="/help">Bantuan</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span
              className={`hover:text-[#009EA9]  text-[18px] text-[#212427] flex items-center ${
                pathname === "/media" ? "active-link" : ""
              }`}
            >
              <Link to="/media">Media</Link>
            </span>
          </li>
          <li className="group max-lg:py-2 relative cursor-pointer">
            <span
              className={`hover:text-[#009EA9]  text-[18px] text-[#212427] flex items-center ${
                pathname === "/contact" ? "active-link" : ""
              }`}
            >
              <Link to="/contact">Kontak</Link>
            </span>
          </li>
          <div className="md:inline hidden">
            <li className="border-[1px] border-[#009EA9] rounded-lg px-3 py-2 text-[#009EA9] cursor-pointer max-lg:w-fit">
              <Link to="/login">Belanja di PaDi UMKM</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
