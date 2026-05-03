"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
// Lib function-ta import koro jate fetch error na hoy
import { getProductsData } from "@/lib/getProductsData";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Direct fetch-er bodole lib function call kora safe
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

  // Simple Auto-slide logic (3 second por por change hobe)
  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides]);

  if (loading)
    return (
      <div className="h-100 flex items-center justify-center">Loading...</div>
    );
  if (slides.length === 0) return null;

  const product = slides[currentSlide];

  return (
    <section className="container mx-auto px-4 mt-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#F2F2F2] min-h-100 transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center px-8 md:px-16 py-10">
          {/* Text Content */}
          <div className="space-y-4 z-10 order-2 md:order-1">
            <h3 className="text-[#DB4444] font-bold uppercase tracking-tighter">
              {product.category}
            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              {product.title}
            </h1>
            <div className="pt-4">
              <Button className="bg-black text-white rounded-full px-10 font-bold">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative h-75 md:h-87.5 order-1 md:order-2 flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.title || "Product"}
              width={350}
              height={350}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-black" : "w-2 bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
