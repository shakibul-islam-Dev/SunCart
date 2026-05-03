"use client";
import { Chip, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

export default function Products({ items }) {
  const { id, image, name, rating, isHot, price } = items;

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
          src={image}
          alt={name}
          priority={isHot}
          fill
        />
        <Chip
          size="sm"
          variant="flat"
          className={`absolute right-2 top-2 text-white border-none backdrop-blur-md z-10 ${
            isHot ? "bg-orange-600/90 animate-pulse" : "bg-slate-800/80"
          }`}
        >
          {isHot ? "🔥 Hot" : "Popular"}
        </Chip>
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow pt-4 pb-2 space-y-2">
        <h2 className="text-lg sm:text-xl font-bold line-clamp-1 text-black">
          {name}
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IoStar className="text-yellow-500 text-lg" />
            <span className="text-base font-semibold text-gray-700">
              {rating}
            </span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-[#DB4444]">
            ${price}
          </p>
        </div>

        <div className="pt-2">
          <Link
            href={`/products/${id}`}
            prefetch={true}
            className="w-full block"
          >
            <Button
              className="w-full bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              size="md"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
