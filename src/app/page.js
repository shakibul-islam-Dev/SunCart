import Homepage from "@/components/Home/Homepage";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="flex  justify-between flex-col">
      <main className="flex-1">
        <ProductGrid></ProductGrid>
        <Homepage></Homepage>
        {/* <Hero></Hero> */}
      </main>
    </div>
  );
}
