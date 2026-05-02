import React from "react";
import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Banner */}
      <div className="w-full bg-black text-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="flex-1 text-center">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF
            50%!{" "}
          </span>
          <button className="font-bold underline ml-2 hover:text-gray-300">
            ShopNow
          </button>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>English</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">Sun Cart</div>

        {/* Menu Links */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="border-b-2 border-black pb-1">
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            registration
          </Link>
          <Link
            href="/signup"
            className="hover:text-gray-600 transition-colors"
          >
            Login
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 px-4 py-2 pr-10 rounded text-sm focus:outline-none w-64"
            />
            <Search
              className="absolute right-3 top-2 text-gray-500"
              size={18}
            />
          </div>

          <div className="flex items-center gap-4">
            <Heart
              size={24}
              className="cursor-pointer hover:text-red-500 transition-colors"
            />
            <div className="relative cursor-pointer">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="bg-red-500 p-1.5 rounded-full text-white cursor-pointer">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
