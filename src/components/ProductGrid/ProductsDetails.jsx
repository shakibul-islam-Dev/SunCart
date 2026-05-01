"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import { IoStar, IoHeart, IoHeartOutline } from "react-icons/io5";

import { useState } from "react";
import { h1 } from "framer-motion/client";

const ProductsDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  if (!product) return <div className="p-20 text-center">Loading...</div>;
  const { name, rating, brand, description, image, price } = product;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-[#F5F5F5] rounded-lg flex w-full items-center justify-center p-8 aspect-square relative">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-contain rounded-lg mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <IoStar
                  key={i}
                  className={
                    i < Math.floor(rating) ? "fill-current" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">(150 Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-green-500 text-sm font-medium">In Stock</span>
          </div>
          <p className="text-2xl font-semibold mt-4">{brand}</p>
          <p className="text-2xl font-semibold mt-4">$ {price}</p>
        </div>

        <p className="text-gray-600 leading-relaxed border-b pb-6">
          {description ||
            "High quality product with premium features and long-lasting durability."}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-black hover:text-white border-r transition-colors"
            >
              −
            </button>
            <div className="px-6 py-2 font-bold w-16 text-center">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-[#DB4444] hover:text-white border-l transition-colors"
            >
              +
            </button>
          </div>
          <Button
            size="lg"
            className="bg-[#DB4444] text-white font-bold rounded px-12 h-12 flex-1"
          >
            Buy Now
          </Button>
          {/* Heaart Icon */}
          <Button
            isIconOnly
            variant="bordered"
            onClick={() => setIsFavorite(!isFavorite)}
            className={`rounded border-gray-300 h-12 w-12 min-w-0 transition-all ${
              isFavorite ? "text-red-500 border-red-500 bg-red-50" : ""
            }`}
          >
            {isFavorite ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
