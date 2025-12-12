import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../image/logo.jpg";
import signup from "../image/signup.png";
import search from "../image/search.png";
import crt from "../image/cart.png";

export default function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {["Welding", "HVAC", "Carpentry", "Healthcare", "Support"].map(
                  (item) => (
                    <a
                      key={item}
                      className="text-sm cursor-pointer text-[#000000]"
                    >
                      {item}
                    </a>
                  )
                )}
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

            {/* Desktop only: All VR Products dropdown */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setOpenProducts((v) => !v)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm text-[#000000] cursor-pointer hover:bg-gray-50"
                aria-haspopup="true"
                aria-expanded={openProducts}
              >
                <span>All VR Products</span>

                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    openProducts ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openProducts && (
                <div className="absolute right-0 mt-4 w-56 bg-gray-100 rounded shadow-md z-30">
                  <ul className="py-1">
                    {["VR Headsets", "VR Tools", "Enterprise"].map((item) => (
                      <li key={item}>
                        <a className="block px-4 py-2 text-sm hover:bg-gray-50">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop: Search icon on the right (visible on lg and up) */}
            <button className="relative p-2 rounded hover:bg-gray-50 text-[#000000] hidden lg:block" aria-label="Search desktop">
              <img src={search} className="w-[15px]" alt="search" />
            </button>

            {/* Cart - always visible on right (desktop & tablet & phone) */}
            <button className="relative p-2 rounded hover:bg-gray-50 text-[#000000]">
              <img src={crt} className="w-[17px]" alt="cart" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>

            {/* Signup/User - always visible on right */}
            <a
              href="/signin"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 rounded"
            >
              <img src={signup} className="w-[39px]" alt="signin" />
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE / TABLET MENU DROPDOWN ---------------- */}
      {mobileMenu && (
        <div className="lg:hidden absolute z-50 w-full  bg-gray-100 ">
          <nav className="flex pl-3 flex-col ">
            {["Welding", "HVAC", "Carpentry", "Healthcare", "Support"].map(
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