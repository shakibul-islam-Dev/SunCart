"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { getProductsData } from "@/lib/getProductsData";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProductsData();
        setSlides(data.slice(0, 3));
      } catch (error) {
        console.error("Hero data load hote parini:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides]);

  if (loading)
    return (
      <div className="h-[400px] flex items-center justify-center">
        Loading...
      </div>
    );
  if (slides.length === 0) return null;

  const product = slides[currentSlide];

  return (
    <section className="container mx-auto px-4 mt-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#F2F2F2] min-h-[400px] transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center px-8 md:px-16 py-10">
          {/* Text Content */}
          <div className="space-y-4 z-10 order-2 md:order-1">
            {/* Hot Deals Badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[#DB4444] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                Hot Deals 🔥
              </span>
            </div>

            <h3 className="text-[#DB4444] font-bold uppercase tracking-widest text-sm">
              {product.category}
            </h3>

            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
              {product.name || product.title}
            </h1>

            {/* Summer Sale Highlight */}
            <p className="text-xl md:text-2xl font-semibold text-gray-700">
              Summer Sale <span className="text-[#DB4444]">50% OFF</span>
            </p>

            <div className="pt-6">
              <Button className="bg-black text-white rounded-full px-10 py-6 font-bold text-lg hover:scale-105 transition-transform">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative h-[300px] md:h-[400px] order-1 md:order-2 flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.name || "Product"}
              width={400}
              height={400}
              className="object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-10 bg-black" : "w-2.5 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
