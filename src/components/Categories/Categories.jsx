import { Button } from "@heroui/react";
import React from "react";

const Categories = async ({ selectedCategory }) => {
  const response = await fetch(
    "https://sun-cart-hdlk.vercel.app/categories.json",
  );
  const data = await response.json();

  const categories = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.category === item.category),
  );

  return (
    <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap w-full px-2 py-2 no-scrollbar">
      {categories.map((item) => (
        <Button
          key={item.id}
          variant="bordered"
          className="rounded-full border-gray-300 px-6 shrink-0"
        >
          <span className="text-sm font-medium">{item.category}</span>
        </Button>
      ))}
    </div>
  );
};

export default Categories;
