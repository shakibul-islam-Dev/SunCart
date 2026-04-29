// src/components/shared/UserNavbar.jsx
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Search,
  Heart,
  ShoppingBag,
  UserCircle,
  ChevronDown,
} from "lucide-react";

const UserNavbar = () => {
  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "Shop", href: "/shop", hasDropdown: true },
    { name: "Pages", href: "/pages", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: true },
    { name: "About Us", href: "/about" },
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-[#EDF2EE] text-gray-700 text-sm py-2">
        <div className="max-w-480 mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#00B207]" />
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
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

      <div className="w-full bg-white shadow-sm">
        <div className="max-w-480 mx-auto px-6 py-4 grid grid-cols-3 items-center">
          <div className="flex items-center gap-6">
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

          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_green.png"
                alt="Ecobazar Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
              <span className="text-2xl font-bold text-[#1A1A1A]">
                Ecobazar
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-6 text-gray-800">
            <div className="flex items-center gap-2">
              <Phone size={24} className="text-gray-800" />
              <span className="text-base font-semibold text-gray-900">
                (219) 555-0114
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button className="hover:text-[#00B207]">
                <Search size={24} />
              </button>
              <button className="hover:text-[#00B207]">
                <Heart size={24} />
              </button>

              <button className="relative hover:text-[#00B207]">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-[#2C742F] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>

              <button className="hover:text-[#00B207]">
                <UserCircle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
