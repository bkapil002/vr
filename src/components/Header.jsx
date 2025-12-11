import { useState } from "react";
import { LuUserRoundPlus } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* ---------------- LEFT AREA ---------------- */}
          <div className="flex items-center gap-6">

            {/* Mobile menu + mobile search */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setMobileMenu((p) => !p)}
                className="p-2 rounded hover:bg-gray-50"
              >
                {mobileMenu ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
              </button>

              <button aria-label="Search" className="p-2 rounded hover:bg-gray-50">
                <VscSearch size={20} />
              </button>
            </div>

            {/* LOGO */}
            <div className="flex md:flex-none justify-center md:justify-start flex-1 md:flex-none">
              <a href="/" className="inline-flex items-center gap-0">
                <span className="text-[#D7B061] font-bold text-[25px]">Trade</span>
                <span className="text-[#1E4F9D] font-bold text-[25px]">VR</span>
              </a>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-6 ml-4">
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

          {/* ---------------- RIGHT AREA ---------------- */}
          <div className="flex items-center space-x-4">

            

            {/* Desktop only: All VR Products dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setOpenProducts((v) => !v)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm text-[#000000] cursor-pointer hover:bg-gray-50"
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
                <div className="absolute right-0 mt-4 w-56 bg-gray-100 rounded shadow-md z-20">
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

            {/* Desktop: Search Icon (NOW VISIBLE) */}
            <button className="relative p-2 rounded hover:bg-gray-50 text-[#000000]hidden md:block">
              <VscSearch size={18} />
            </button>

            <button className="relative p-2 rounded hover:bg-gray-50 text-[#000000]">
              <BsCart3 size={18} />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>

            {/* User */}
            <a
              href="/signin"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-[#000000] rounded"
            >
              <span className="w-8 h-8 border rounded-full inline-flex items-center justify-center">
                <LuUserRoundPlus size={18} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU DROPDOWN ---------------- */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-100">
          <nav className="flex flex-col">
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
