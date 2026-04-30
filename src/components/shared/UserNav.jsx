"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Search,
  Heart,
  ShoppingBag,
  UserCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "Product", href: "/shop", hasDropdown: true },
    { name: "My Profile", href: "/pages", hasDropdown: true },
  ];

  return (
    <div className="w-full">
      {/* Top Utility Bar - Hidden on Mobile */}
      <div className="w-full bg-[#EDF2EE] text-gray-700 text-sm py-2 hidden md:block">
        <div className="max-w-330 mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#00B207]" />
            <span className="truncate">
              Store Location: 344 Dhakkinkhna, Uttara, Dhaka, Bangladesh
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Eng</span>
              <ChevronDown size={16} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>USD</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-330 mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Mobile Menu Button (Left) */}
          <button
            className="lg:hidden p-1 text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation (Left) */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-gray-800 font-medium text-base hover:text-[#00B207] transition-colors"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={16} className="text-gray-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Logo (Center) */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_green.png"
                alt="Ecobazar Logo"
                width={32}
                height={32}
                priority
                className="object-contain md:w-10 md:h-10"
              />
              <span className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                Sun Cart
              </span>
            </Link>
          </div>

          {/* Icons & Actions (Right) */}
          <div className="flex items-center justify-end gap-3 md:gap-6 text-gray-800">
            {/* Phone - Desktop Only */}
            <div className="hidden xl:flex items-center gap-2">
              <Phone size={24} className="text-gray-800" />
              <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
                (219) 555-0114
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button className="hover:text-[#00B207] p-1">
                <Search size={22} />
              </button>
              <button className="hover:text-[#00B207] p-1 hidden sm:block">
                <Heart size={22} />
              </button>

              <button className="relative hover:text-[#00B207] p-1">
                <ShoppingBag size={22} />
                <span className="absolute -top-1 -right-1 bg-[#2C742F] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>

              <button className="hover:text-[#00B207] p-1">
                <UserCircle size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`
          lg:hidden absolute top-full left-0 w-full bg-white border-t transition-all duration-300 ease-in-out shadow-lg
          ${isMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}
        `}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-gray-800 font-medium text-lg border-b border-gray-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 text-[#00B207] font-semibold">
              <Phone size={20} />
              <span>(219) 555-0114</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
