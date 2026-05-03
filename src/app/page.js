import Homepage from "@/components/Home/Homepage";
import { ToastContainer, toast } from "react-toastify";

export default function Home({ searchParams }) {
  return (
    <>
      <Homepage searchParams={searchParams} />
    </>
  );
}
