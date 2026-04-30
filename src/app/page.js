import Homepage from "@/components/Home/Homepage";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex  justify-between flex-col">
      <main className="flex-1">
        <Homepage></Homepage>
        {/* <Hero></Hero> */}
      </main>
    </div>
  );
}
