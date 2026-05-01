"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getProductsData } from "@/lib/getProductsData";
export default function Hero() {
  const loadData = getProductsData();
  console.log(loadData);

  return (
    <section className="w-full bg-white pt-6">
      {/* Main Banner Slider Area */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center relative min-h-112.5">
          {/* Left: Product Image with Slider Border */}
          <div className="w-full md:w-1/2 p-10 flex justify-center relative">
            <div className="relative w-full aspect-square max-w-112.5 border-[3px] border-[#00B207] rounded-lg overflow-hidden p-4 bg-white shadow-sm">
              {/* 70% Off Badge */}
              <div className="absolute top-4 right-4 bg-[#FF8A00] text-white rounded-full w-16 h-16 flex flex-col items-center justify-center font-bold shadow-md">
                <span className="text-lg leading-none">70%</span>
                <span className="text-[10px] uppercase">Off</span>
              </div>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full md:w-1/2 p-10 space-y-5">
            <p className="text-[#00B207] uppercase tracking-widest text-xs font-semibold">
              Welcome to Shopery
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1]">
              Fresh & Healthy <br /> Organic Food
            </h1>
            <p className="text-gray-500 text-sm max-w-sm">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <button className="bg-[#00B207] hover:bg-[#009606] text-white px-10 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-green-200">
              Shop now <ArrowRight size={20} />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B207]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>

      {/* Feature Cards Area - Overlapping Style */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden border border-gray-100">
          {/* Active/Featured Feature (Green) */}
          <div className="bg-[#00B207] p-8 text-white flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-white/20 rounded-full">
              <Image
                src="/icons/shipping-white.svg"
                width={32}
                height={32}
                alt="shipping"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-nowrap">Free Shipping</h3>
              <p className="text-xs opacity-90">Free shipping with discount</p>
            </div>
          </div>

          {/* Regular Feature 1 */}
          <div className="p-8 flex flex-col items-center text-center space-y-3 border-r border-gray-100">
            <div className="p-3 bg-gray-50 text-[#00B207] rounded-full">
              <Image
                src="/icons/support-green.svg"
                width={32}
                height={32}
                alt="support"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">
                Great Support 24/7
              </h3>
              <p className="text-xs text-gray-500">Instant access to Contact</p>
            </div>
          </div>

          {/* Regular Feature 2 */}
          <div className="p-8 flex flex-col items-center text-center space-y-3 border-r border-gray-100">
            <div className="p-3 bg-gray-50 text-[#00B207] rounded-full">
              <Image
                src="/icons/secure-green.svg"
                width={32}
                height={32}
                alt="secure"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg text-nowrap">
                100% Secure Payment
              </h3>
              <p className="text-xs text-gray-500">
                We ensure your money is save
              </p>
            </div>
          </div>

          {/* Regular Feature 3 */}
          <div className="p-8 flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-gray-50 text-[#00B207] rounded-full">
              <Image
                src="/icons/moneyback-green.svg"
                width={32}
                height={32}
                alt="moneyback"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg text-nowrap">
                Money-Back Guarantee
              </h3>
              <p className="text-xs text-gray-500">
                30 days money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
