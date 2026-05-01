import { getProductsData } from "@/lib/getProductsData";
import Products from "./Products";

export default async function ProductGrid() {
  const productsData = await getProductsData();

  return (
    <div>
      {productsData.map((product) => (
        <Products key={product.id} items={product}></Products>
      ))}
    </div>
  );
}
