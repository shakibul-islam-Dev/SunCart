import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sun Cart",
  description: "Next Generation E-commerce Platform",
  referrer: "no-referrer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-screen w-full flex flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col pt-20 md:pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
