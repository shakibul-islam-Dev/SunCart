import Hero from "@/components/Hero/Hero";
import ProductsDetails from "@/components/ProductGrid/ProductsDetails";
import { getProductsData } from "@/lib/getProductsData";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const allProducts = await getProductsData();
  const singleData = allProducts.find((p) => String(p.id) === String(id));
  console.log(singleData);

  return (
    <div className="container mx-auto p-6">
      <ProductsDetails product={singleData} />
    </div>
  );
}
