import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Regester = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-white font-poppins">
      {/* Left Side: Image Section */}
      <div className="w-full md:w-[55%] bg-[#CBE4E8] flex items-end justify-center pt-20 overflow-hidden self-stretch">
        <div className="relative w-full h-150 lg:h-195">
          <Image
            src="/side-image.png" // আপনার ইমেজ পাথ
            alt="Shopping Illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-8 lg:p-20">
        <div className="w-full max-w-92.5">
          <h2 className="text-3xl font-medium tracking-wider mb-2">
            Create an account
          </h2>
          <p className="text-sm mb-10">Enter your details below</p>

          <form className="space-y-8">
            <div className="space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-400 pb-2 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border-b border-gray-400 pb-2 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-400 pb-2 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="space-y-4 pt-4">
              <button
                type="submit"
                className="w-full bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-[#e05a5a] transition-all"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full border border-gray-400 py-4 rounded flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
              >
                <FcGoogle className="text-2xl" />
                <span>Sign up with Google</span>
              </button>
            </div>
          </form>

          <div className="mt-8 text-center flex items-center justify-center gap-4 text-gray-600">
            <p>Already have account?</p>
            <Link
              href="/login"
              className="font-medium border-b border-gray-500 hover:text-black transition-all"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
