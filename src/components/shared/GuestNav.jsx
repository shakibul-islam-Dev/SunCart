import React from "react";
import {
  FaSearch,
  FaRegHeart,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaChevronDown,
  FaLeaf,
} from "react-icons/fa";

const EcobazarHeader = () => {
  return (
    <header className="w-full font-sans bg-white border-b border-gray-100">
      {/* Top Utility Bar */}
      <div className="bg-[#F2F2F2] py-2 px-4 md:px-10 flex justify-between items-center text-[11px] text-gray-600">
        <div className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-gray-400" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            Eng <FaChevronDown size={10} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            USD <FaChevronDown size={10} />
          </div>
          <div className="h-3 w-px bg-gray-300 mx-1"></div>
          <div className="cursor-pointer hover:text-green-600">
            Sign In / Sign Up
          </div>
        </div>
      </div>

      {/* Middle Main Bar */}
      <div className="py-5 px-4 md:px-10 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaLeaf size={28} className="text-[#00B207]" />
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Ecobazar</h1>
        </div>

        {/* Search Input */}
        <div className="flex flex-1 max-w-xl border border-gray-300 rounded-md overflow-hidden h-11">
          <div className="flex items-center px-3 text-gray-400">
            <FaSearch size={16} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm px-2"
          />
          <button className="bg-[#00B207] text-white px-6 font-medium text-sm hover:bg-[#009a06]">
            Search
          </button>
        </div>

        {/* Cart & Wishlist */}
        <div className="flex items-center gap-4">
          <FaRegHeart size={22} className="cursor-pointer text-[#1A1A1A]" />
          <div className="h-6 w-px bg-gray-200"></div>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <FaShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-[#2C742F] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] text-gray-500 uppercase">
                Shopping cart:
              </p>
              <p className="text-sm font-semibold">$57.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#333333] text-white px-4 md:px-10 py-3 flex justify-between items-center text-sm">
        <nav>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-1 cursor-pointer">
              Home <FaChevronDown size={12} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer text-gray-300">
              Shop <FaChevronDown size={12} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer text-gray-300">
              Pages <FaChevronDown size={12} />
            </li>
            <li className="flex items-center gap-1 cursor-pointer text-gray-300">
              Blog <FaChevronDown size={12} />
            </li>
            <li className="cursor-pointer text-gray-300">About Us</li>
            <li className="cursor-pointer text-gray-300">Contact Us</li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <FaPhoneAlt size={16} />
          <span className="font-semibold">(219) 555-0114</span>
        </div>
      </div>
    </header>
  );
};

export default EcobazarHeader;
