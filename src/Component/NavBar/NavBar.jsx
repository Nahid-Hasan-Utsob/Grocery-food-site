import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <section
        className="max-w-7xl
 mx-auto"
      >
        <nav className="flex justify-between items-center h-20">
          <div className="flex justify-between h-14 items-center px-4 w-3/4 mr-20">
            <p className="text-2xl font-semibold tracking-wider">
              Gr
              <span className="uppercase font-semibold text-orange-600">o</span>
              cify
            </p>
            <ul className="flex gap-x-13 tracking-wider">
              <li>
                <a href="" className="text-base text-orange-600 ">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-base hover:text-orange-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="text-base hover:text-orange-600">
                  Process
                </a>
              </li>
              <li>
                <a href="" className="text-base hover:text-orange-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="rounded-full w-fit border-2 border-orange-500 flex items-center p-1">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 focus:outline-none focus:ring-0 text-black"
              />
              <button className="bg-orange-500 flex justify-center items-center ml-auto p-3 rounded-[50%] text-white font-bold text-">
                <FaSearch />
              </button>
            </div>
            <div className="flex justify-center items-center gap-3 text-2xl">
              <FaHeart />
              <FaShoppingCart />
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
