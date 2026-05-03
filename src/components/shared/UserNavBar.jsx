"use client";

import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const UserNavBar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <>
      {/* ================= TOP NAVBAR (Desktop & Mobile) ================= */}
      <header className="fixed top-0 left-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tight"
            >
              Sun <span className="text-blue-600">Cart</span>
            </Link>

            {/* Desktop Nav - Hidden on Mobile (md:flex) */}
            <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-blue-600 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-blue-600 transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>

            {/* User/Auth Actions */}
            <div className="flex items-center gap-3">
              {!user && (
                <div className="flex items-center gap-2">
                  <Link href="/login" className="text-sm font-medium px-2">
                    Login
                  </Link>
                  <Link
                    href="/registration"
                    className=" text-black text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
              {user && (
                <div className="flex items-center gap-3">
                  {/* Desktop Avatar - Hidden on Mobile */}
                  <Link href="/profile" className="md:block ">
                    <Avatar>
                      <Avatar.Image
                        alt={user?.name?.charAt(0)}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="text-red-500 hover:scale-110 transition-transform p-1"
                  >
                    <CiLogout className="text-2xl md:text-3xl" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE BOTTOM MENU (Visible only on Mobile) ================= */}
      <div className="lg:hidden  fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50 px-6 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <ul className="flex items-center justify-between">
          <li>
            <Link
              href="/"
              className="flex flex-col items-center gap-1 text-gray-500"
            >
              <span className="text-xl font-bold uppercase tracking-wide">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="flex flex-col items-center gap-1 text-gray-500"
            >
              <span className="text-xl font-bold uppercase tracking-wide">
                Shop
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex flex-col items-center gap-1 text-gray-500"
            >
              <span className="text-xl font-bold uppercase tracking-wide">
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* ================= CONTENT SPACING ================= */}
      <div className="h-16 md:h-20" />
      <div className="md:hidden h-16" />
    </>
  );
};

export default UserNavBar;
