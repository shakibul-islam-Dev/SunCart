"use client";

import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Categories = ({ selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://sun-cart-hdlk.vercel.app/categories.json",
        );
        const data = await response.json();

        const unique = data.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.category === item.category),
        );
        setCategories(unique);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleFilter = (categoryName) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", categoryName);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (loading)
    return (
      <div className="h-10 animate-pulse bg-gray-200 rounded-full w-full"></div>
    );

  return (
    <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap w-full px-2 py-2 no-scrollbar">
      {/* Clear/All Button */}
      <Button
        onPress={() => router.push("/", { scroll: false })}
        variant={!selectedCategory ? "solid" : "bordered"}
        className="rounded-full border-gray-300 px-6 shrink-0"
      >
        All
      </Button>

      {categories.map((item) => (
        <Button
          key={item.id}
          onPress={() => handleFilter(item.category)}
          variant={selectedCategory === item.category ? "solid" : "bordered"}
          color={selectedCategory === item.category ? "danger" : "default"}
          className="rounded-full border-gray-300 px-6 shrink-0 transition-all"
        >
          <span className="text-sm font-medium">{item.category}</span>
        </Button>
      ))}
    </div>
  );
};

export default Categories;
