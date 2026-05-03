import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
export const dynamic = "force-dynamic";
const Homepage = ({ searchParams }) => {
  return (
    <section>
      <Hero></Hero>
      <ProductGrid searchParams={searchParams}></ProductGrid>
    </section>
  );
};

export default Homepage;
