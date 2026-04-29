import Footer from "@/components/shared/Footer";
import Geust from "@/components/shared/GuestNav";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  justify-between flex-col">
      <Navbar></Navbar>
      <main></main>
      <Footer></Footer>
    </div>
  );
}
