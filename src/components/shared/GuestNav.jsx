"use client";
import React, { useState } from "react";
import {
  FaSearch,
  FaRegHeart,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaChevronDown,
  FaLeaf,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Suncart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans bg-white border-b border-gray-100">
      {/* Top Utility Bar - Hidden on extra small mobile */}
      <div className="bg-[#F2F2F2] py-2 px-4 md:px-10 hidden sm:flex justify-between items-center text-[11px] text-gray-600">
        <div className="flex items-center gap-1.5 truncate mr-4">
          <FaMapMarkerAlt className="text-gray-400 shrink-0" />
          <span className="truncate">
            Store Location: 344 Dhakkinkhna, Uttara, Dhaka, Bangladesh
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
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
      <div className="py-5 px-4 md:px-10 flex items-center justify-between gap-4">
        {/* Mobile Menu Toggle (Left on mobile) */}
        <button
          className="lg:hidden text-[#1A1A1A] p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaLeaf size={28} className="text-[#00B207]" />
          <h1 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
            Sun Cart
          </h1>
        </div>

        {/* Search Input - Hidden on mobile, shown on tablet/desktop */}
        <div className="hidden md:flex flex-1 max-w-xl border border-gray-300 rounded-md overflow-hidden h-11 ml-4">
          <div className="flex items-center px-3 text-gray-400">
            <FaSearch size={16} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm px-2"
          />
          <button className="bg-[#00B207] text-white px-6 font-medium text-sm hover:bg-[#009a06] transition-colors">
            Search
          </button>
        </div>

        {/* Cart & Wishlist */}
        <div className="flex items-center gap-3 md:gap-4">
          <FaRegHeart
            size={22}
            className="cursor-pointer text-[#1A1A1A] hidden xs:block"
          />
          <div className="h-6 w-px bg-gray-200 hidden xs:block"></div>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <FaShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 bg-[#2C742F] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] text-gray-500 uppercase leading-none">
                <FaShoppingBag size={22} />
              </p>
              <p className="text-sm font-semibold leading-tight">0.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (Shown only on small screens) */}
      <div className="px-4 pb-4 md:hidden">
        <div className="flex border border-gray-300 rounded-md overflow-hidden h-10">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm px-3"
          />
          <button className="bg-[#00B207] text-white px-4">
            <FaSearch size={14} />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        className={`
        ${isMenuOpen ? "flex" : "hidden"} 
        lg:flex bg-[#333333] text-white px-4 md:px-10 py-3 flex-col lg:flex-row justify-between items-start lg:items-center text-sm
      `}
      >
        <nav className="w-full lg:w-auto">
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <li className="flex items-center justify-between lg:justify-start gap-1 cursor-pointer border-b border-gray-700 lg:border-none pb-2 lg:pb-0">
              Home <FaChevronDown size={12} />
            </li>
            <li className="flex items-center justify-between lg:justify-start gap-1 cursor-pointer text-gray-300 border-b border-gray-700 lg:border-none pb-2 lg:pb-0">
              Products <FaChevronDown size={12} />
            </li>
            <li className="flex items-center justify-between lg:justify-start gap-1 cursor-pointer text-gray-300 border-b border-gray-700 lg:border-none pb-2 lg:pb-0">
              My Profile <FaChevronDown size={12} />
            </li>
            <li className="cursor-pointer text-gray-300 border-b border-gray-700 lg:border-none pb-2 lg:pb-0">
              About Us
            </li>
            <li className="cursor-pointer text-gray-300 border-b border-gray-700 lg:border-none pb-2 lg:pb-0">
              Contact Us
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 mt-4 lg:mt-0 pt-2 lg:pt-0">
          <FaPhoneAlt size={16} />
          <span className="font-semibold">(219) 555-0114</span>
        </div>
      </div>
    </header>
  );
};

export default Suncart;
