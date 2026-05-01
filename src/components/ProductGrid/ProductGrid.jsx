import { getProductsData } from "@/lib/getProductsData";
import { FaFireAlt } from "react-icons/fa";
import Products from "./Products";

export default async function ProductGrid() {
  const productsData = await getProductsData();

  return (
    <div className="flex items-center justify-between flex-col space-y-5 mt-10 mb-20">
      <div className="flex items-center gap-2">
        <FaFireAlt className="text-4xl " />
        <h1 className="text-6xl font-bold"> Popular Products</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 rounded-b-full shadow-full p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {productsData.map((product) => (
          <Products key={product.id} items={product}></Products>
        ))}
      </div>
    </div>
  );
}
