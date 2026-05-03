import { getProductsData } from "@/lib/getProductsData";
import { FaFireAlt } from "react-icons/fa";
import Products from "./Products";
import Categories from "../Categories/Categories";

export default async function ProductGrid() {
  const productsData = await getProductsData();

  return (
    <div className="container mx-auto px-4 mt-10 mb-20 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-3 mb-8 sm:flex-row">
        <FaFireAlt className="text-3xl sm:text-4xl text-[#DB4444]" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight text-black">
          Popular Products
        </h1>
      </div>

      {/* Categories Section - Horizontal Scroll Enabled */}
      <div className="w-full mb-10 overflow-hidden">
        <Categories />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full">
        {productsData.map((product) => (
          <Products key={product.id} items={product} />
        ))}
      </div>

      {/* Fallback when no products */}
      {productsData.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 text-lg font-medium">
            No products available at the moment.
          </p>
        </div>
      )}
    </div>
  );
}
