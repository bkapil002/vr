import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../image/logo.jpg";
import signup from "../image/signup.png";
import search from "../image/search.png";
import crt from "../image/cart.png";
import { Link, Links } from "react-router-dom";

export default function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
  { name: "Welding", path: "/vrweld" },
  { name: "HVAC", path: "/vrhvac" },
  { name: "Mechatronics", path: "/vrmechatronics" },
  { name: "Healthcare", path: "/vrsterile" },
  { name: "Support", path: "/support-center" },
];

  return (
    <header className="bg-white">
      <div className="max-w-[1400px]  mx-auto px-4 sm:px-6 lg:px-8">
        {/* container is relative so we can center the logo on tablet/phone */}
        <div className="h-15 flex items-center justify-between relative">

          {/* ---------------- LEFT AREA ---------------- */}
          <div className="flex items-center gap-6">

            {/* Mobile & Tablet: show hamburger + search on the left (visible below lg) */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setMobileMenu((p) => !p)}
                className="p-2 rounded hover:bg-gray-50"
                aria-label="Open menu"
              >
                {mobileMenu ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
              </button>

              <button aria-label="Search" className="p-2 rounded hover:bg-gray-50">
                <img src={search} className="w-[15px]" alt="search" />
              </button>
            </div>

            {/* Desktop (lg and up): logo + navigation on left */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="/" className="inline-flex items-center gap-0" aria-label="Home">
                <img src={logo} className="w-28" alt="logo" />
              </a>

              <nav className="flex space-x-6 ml-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm font-medium text-gray-800 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* ---------------- CENTERED LOGO for Tablet & Phone ---------------- */}
          {/* Visible below lg, hidden on lg+ so desktop uses the left-side logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:hidden z-20">
            <a href="/" className="inline-flex items-center gap-0" aria-label="Home">
              <img src={logo} className="w-24" alt="logo" />
            </a>
          </div>

          {/* ---------------- RIGHT AREA ---------------- */}
          <div className="flex items-center space-x-3">

            

            {/* Desktop: Search icon on the right (visible on lg and up) */}
            <button className="relative p-2 rounded hover:bg-gray-50 text-[#000000] hidden lg:block" aria-label="Search desktop">
              <img src={search} className="w-[15px]" alt="search" />
            </button>

            {/* Cart - always visible on right (desktop & tablet & phone) */}
            <Link to='/cart' className="relative p-2 rounded hover:bg-gray-50 text-[#000000]">
              <img src={crt} className="w-[17px]" alt="cart" />
              
            </Link>

            {/* Signup/User - always visible on right */}
            <Link
              to="/signin"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 rounded"
            >
              <img src={signup} className="w-[39px]" alt="signin" />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE / TABLET MENU DROPDOWN ---------------- */}
      {mobileMenu && (
        <div className="lg:hidden absolute z-50 w-full  bg-gray-100 ">
          <nav className="flex pl-3 flex-col ">
            {["Welding", "HVAC", "Mechatronics", "Healthcare", "Support"].map(
              (item, index) => (
                <a
                  key={index}
                  className="text-[#000000] text-[17px] px-4 py-4 border-b border-gray-200 hover:bg-gray-200"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
