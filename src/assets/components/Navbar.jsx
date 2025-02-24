import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const togglemenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <div className="py-3 flex justify-between items-center">
      <div>
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      {menuOpen && (
        <div className="container fixed top-16 left-0 w-full h-screen bg-white z-50 p-4 md:hidden ">
          <ul className="space-y-4">
            {["SOAP", "SHAMPOO", "FACEWASH", "SKIN", "TEETH"].map((item) => (
              <li key={item} className="text-center">
                <a
                  href=""
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="p-4 hidden md:block">
        <div className="container mx-auto">
          <div className="flex space-x-6 justify-center">
            {["SOAP", "SHAMPOO", "FACEWASH", "SKIN", "TEETH"].map((item) => (
              <a key={item}
                className="text-gray-700 hover:text-orange-500 cursor-pointer transition duration-300"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pr-5">
        <RxHamburgerMenu
          className="md:hidden"
          onClick={() => {
            togglemenu();
          }}
        />
        <div className="relative group hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="w-[150px] sm:w-[150px]
               rounded-full pl-8 py-2
               border border-gray-300
               focus:outline-none focus:border-orange-400
               focus:border-1
               focus-within:text-orange-400"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 " />
          <CiShoppingCart
            className="absolute left-30 top-1/2 transform -translate-y-1/2"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
