import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold">
            Gr<span className="text-orange-500">O</span>cify
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Bred for a high content of beneficial substances. <br />
            Our products are all fresh and healthy.
          </p>
          <p className="mt-4 text-sm">2025 © All Rights Reserved</p>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">FAQ'S</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Support Center</li>
            <li className="hover:text-orange-500 cursor-pointer">Feedback</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Stay Connected</h2>
          <p className="text-sm mb-3">Questions or Feedback?<br/>We'd love to hear from you.</p>
          <div className="flex items-center bg-white rounded-md shadow-sm overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 outline-none text-sm"
            />
            <button className="bg-orange-500 text-white px-3 py-2">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
