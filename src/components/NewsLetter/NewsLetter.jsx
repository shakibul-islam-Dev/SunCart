import React from "react";

import { PiLeafLight } from "react-icons/pi";
const NewsLetter = () => {
  return (
    <section className="bg-[#F2F2F2] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <PiLeafLight className="text-[#00B207] text-4xl" />
          <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">
            Sun Cart
          </h2>
        </div>

        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-2xl font-semibold text-[#1A1A1A]">
            Subcribe our Newsletter
          </h3>
          <p className="text-[#999999] text-sm mt-1">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </p>
        </div>

        {/* Input Section */}
        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full py-4 px-6 rounded-full border border-[#E6E6E6] focus:outline-none focus:ring-1 focus:ring-[#00B207]"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-[#00B207] text-white px-8 rounded-full font-semibold hover:bg-[#008A05] transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
