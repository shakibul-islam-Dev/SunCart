"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaApple,
  FaGooglePlay,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcApplePay,
} from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";

const Footer = () => {
  // Static year use kora holo jate hydration mismatch ba cascading render error na hoy
  const currentYear = 2026;

  const navigation = {
    myAccount: [
      { name: "My Account", href: "#" },
      { name: "Order History", href: "#" },
      { name: "Shoping Cart", href: "#", active: true },
      { name: "Wishlist", href: "#" },
      { name: "Settings", href: "#" },
    ],
    helps: [
      { name: "Contact", href: "#" },
      { name: "Faqs", href: "#" },
      { name: "Terms & Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    proxy: [
      { name: "About", href: "#" },
      { name: "Shop", href: "#" },
      { name: "Product", href: "#" },
      { name: "Products Details", href: "#" },
      { name: "Track Order", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#999999] pt-16 pb-8 px-4 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Info */}
        <div className="lg:col-span-1">
          <h3 className="text-white text-lg font-semibold mb-6">
            About Shopery
          </h3>
          <p className="text-sm leading-6 mb-6">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white border-b-2 border-[#00B207] pb-0.5 font-medium tracking-tight">
              (219) 555-0114
            </span>
            <span className="text-xs">or</span>
            <Link
              href="mailto:Proxy@gmail.com"
              className="text-white border-b-2 border-[#00B207] pb-0.5 font-medium hover:text-[#00B207] transition-all"
            >
              Proxy@gmail.com
            </Link>
          </div>
        </div>

        {/* Dynamic Nav Columns */}
        <NavColumn title="My Account" items={navigation.myAccount} />
        <NavColumn title="Helps" items={navigation.helps} />
        <NavColumn title="Proxy" items={navigation.proxy} />

        {/* Mobile App Section */}
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-semibold mb-6">
            Download our Mobile App
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-[#333333] hover:bg-[#404040] py-2 px-4 rounded-md transition-all group max-w-50 cursor-pointer">
              <div className="text-white group-hover:scale-110 transition-transform duration-300">
                <FaApple className="text-2xl" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase text-gray-400 font-medium leading-none mb-1">
                  Download on the
                </span>
                <span className="text-sm font-semibold text-white leading-none">
                  App Store
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#333333] hover:bg-[#404040] py-2 px-4 rounded-md transition-all group max-w-50 cursor-pointer">
              <div className="text-white group-hover:scale-110 transition-transform duration-300">
                <FaGooglePlay className="text-xl" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase text-gray-400 font-medium leading-none mb-1">
                  Download on the
                </span>
                <span className="text-sm font-semibold text-white leading-none">
                  Google play
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#2B2B2B] flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <SocialBtn icon={<FaFacebookF />} active />
          <SocialBtn icon={<FaTwitter />} />
          <SocialBtn icon={<FaPinterestP />} />
          <SocialBtn icon={<FaInstagram />} />
        </div>

        <p className="text-sm tracking-tight text-center md:text-left">
          Ecobazar eCommerce © {currentYear}. All Rights Reserved
        </p>

        {/* Security & Payments */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <div className="flex gap-3 text-2xl opacity-60 grayscale hover:grayscale-0 transition-all text-white">
            <FaCcApplePay title="Apple Pay" />
            <FaCcVisa title="Visa" />
            <FaCcDiscover title="Discover" />
            <FaCcMastercard title="Mastercard" />
          </div>
          <div className="flex items-center gap-2 text-white border border-[#333333] px-3 py-1.5 rounded-lg text-sm bg-[#222222]">
            <HiOutlineLockClosed className="text-[#00B207] text-lg" />
            <span className="whitespace-nowrap font-medium">
              Secure Payment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Helper Components (Internal)
const NavColumn = ({ title, items }) => (
  <div>
    <h3 className="text-white text-lg font-semibold mb-6">{title}</h3>
    <ul className="flex flex-col gap-3.5 text-sm">
      {items.map((item, i) => (
        <li key={`${title}-${i}`}>
          <Link
            href={item.href}
            className={`transition-colors duration-200 ${
              item.active
                ? "text-white font-medium border-l-2 border-[#00B207] pl-2"
                : "hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialBtn = ({ icon, active = false }) => (
  <div
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-[#333333] cursor-pointer ${
      active
        ? "bg-[#00B207] text-white border-[#00B207]"
        : "text-[#999999] hover:bg-[#333333] hover:text-white"
    }`}
  >
    {icon}
  </div>
);

export default Footer;
