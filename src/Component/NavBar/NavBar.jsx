import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section>
      {/* navbar */}
      <header className="fixed top-0 left-0 right-0 ">
        <nav className=" flex justify-between items-center md:h-20 h-15 fixed top-0 left-0 right-0 max-w-[1400px]  mx-auto bg-white">
          <div className="flex justify-between h-14 items-center px-4 ">
            <p className="text-3xl font-semibold tracking-wider">
              Gr
              <span className="uppercase font-semibold text-orange-600">o</span>
              cify{" "}
            </p>
          </div>
          <ul className="md:flex gap-x-13 tracking-wider hidden ">
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

          {/* mobile view */}

          <ul
            className={`flex flex-col bg-orange-500/15 backdrop-blur-3xl p-12 absolute top-30 -left-full transform -translate-x-1/2 gap-y-9 rounded-2xl tracking-wider md:hidden transition-all duration-500 ${
              showMenu ? "left-1/2" : ""
            }  `}
          >
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

            <li className="rounded-full w-fit border-2 border-orange-500 flex items-center p-1">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 focus:outline-none focus:ring-0 text-black"
              />
              <button className="bg-orange-500 flex justify-center items-center ml-auto p-3 rounded-[50%] text-white font-bold cursor-pointer">
                <FaSearch />
              </button>
            </li>
          </ul>
          <button className="text-3xl md:hidden block" onClick={handleMenu}>
            {showMenu ? <RiMenu4Fill /> : <RiMenu3Line />}
          </button>

          <div className="md:flex items-center justify-between gap-3 hidden">
            <div className="rounded-full w-fit border-2 border-orange-500 flex items-center p-1">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 focus:outline-none focus:ring-0 text-black"
              />
              <button className="bg-orange-500 flex justify-center items-center ml-auto p-3 rounded-[50%] text-white font-bold cursor-pointer">
                <FaSearch />
              </button>
            </div>
            <div className="flex justify-center items-center gap-3 text-2xl">
              <FaHeart />
              <FaShoppingCart />
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default NavBar;
