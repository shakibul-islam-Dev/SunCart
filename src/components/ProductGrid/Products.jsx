"use client";
import { Chip } from "@heroui/react";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

export default function Products({ items }) {
  const { id, image, name, rating, isHot, price } = items;

  return (
    <div className="roundede-full space-y-4  flex flex-col ">
      {/* image parente */}
      <div className="relative aspect-square w-full">
        <Image
          className="rounded-2xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
          alt={name}
          fill
        />
        <Chip
          size="sm"
          className={`absolute right-2 top-2 text-white border-none ${isHot ? "bg-orange-600 animate-pulse" : "bg-slate-700"}`}
        >
          {isHot ? "🔥 Hot Deals" : "Popular"}
        </Chip>
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex flex-row items-center gap-2">
          <IoStar />
          <h1 className="text-xl font-bold">{rating}</h1>
        </div>
        <h1 className="text-xl font-bold">$ {price}</h1>
        <Link href={`/products/${id}`} prefetch={true} className="w-full block">
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
}
