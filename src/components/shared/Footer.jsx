import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white pt-20 pb-6 font-poppins">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-wider">Sun Cart</h2>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Support</h2>
          <address className="not-italic text-sm leading-relaxed">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </address>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Account</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login / Register
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Quick Link</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Socail App</h2>

          <div className="flex gap-2">
            <div className="flex flex-col gap-2"></div>
          </div>

          <div className="flex gap-6 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-16 pt-4 text-center">
        <p className="text-sm text-gray-500 font-light">
          &copy; Copyright Suncarat {currentYear}. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
