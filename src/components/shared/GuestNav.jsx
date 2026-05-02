import Link from "next/link";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";

const GuestNavbar = () => {
  return (
    <header className="w-full border-b border-gray-200 font-poppins">
      {/* Top Header - Promo Bar */}
      <div className="bg-black text-white py-3 px-4 flex justify-center items-center relative">
        <p className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-bold underline ml-2 cursor-pointer">
            ShopNow
          </span>
        </p>
        <div className="absolute right-10 hidden md:block text-sm">
          <select className="bg-transparent focus:outline-none cursor-pointer">
            <option className="text-black">English</option>
            <option className="text-black">Bengali</option>
          </select>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold">
          Exclusive
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-base">
          <li>
            <Link
              href="/"
              className="hover:underline underline-offset-8 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline underline-offset-8 transition-all"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:underline underline-offset-8 transition-all"
            >
              About
            </Link>
          </li>
          {/* Guest Actions */}
          <li className="flex items-center gap-6 ml-4">
            <Link
              href="/login"
              className="font-medium hover:text-gray-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/registration"
              className=" font-medium hover:text-gray-600 transition-colors"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Search & Icons */}
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center bg-[#F5F5F5] px-4 py-2 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-xs focus:outline-none w-48"
            />
            <CiSearch className="text-xl cursor-pointer" />
          </div>

          <div className="flex items-center gap-4 text-2xl">
            <Link href="/wishlist">
              <CiHeart className="cursor-pointer hover:text-red-500 transition-colors" />
            </Link>
            <Link href="/cart" className="relative">
              <CiShoppingCart className="cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default GuestNavbar;
