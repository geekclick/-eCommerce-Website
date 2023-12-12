import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector(({ cartSlice }) => cartSlice);
  // console.log(cart.length);
  const [showMenu, setShowMenu] = useState("menuItems hide");
  const handleClick = () =>
    setShowMenu(showMenu === "menuItems" ? "menuItems hide" : "menuItems");
  return (
    <>
      <section className="bg-black bg-opacity-[.7] fixed z-50 w-full top-0">
        <nav className="relative px-4 py-4 flex justify-between items-center">
          <Link className="text-3xl font-bold leading-none" to={"/"}>
            <img
              className="h-10 absolute z-50 top-4 left-5 md:left-20"
              src="/game.svg"
              alt="logo"
            />
          </Link>
          <div className="lg:hidden flex flex-row gap-2">
            <Link
              className="flex items-center justify-center gap-x-1 relative bg-gray-50 hover:bg-gray-100 text-xs text-gray-900 font-bold  rounded-xl transition duration-200 px-5 hover:bg-transparent hover:text-white hover:border"
              to={"/cart"}
            >
              <div className="aspect-square rounded-full absolute -top-1 -right-1 bg-yellow-400 w-[20px] py-px text-[9px] text-center text-black hover:animate-pulse">
                {cart.length > 9 ? "9+" : cart.length}
              </div>
              Cart <BsCart4 />
            </Link>
            <button
              className="navbar-burger flex items-center text-hirwa p-3"
              onClick={handleClick}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <title>Mobile menu</title> */}
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-base focus:text-hirwa text-hirwa hover:text-gray-500 font-bold transition-all"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-light hover:text-hirwa hover:text-base transition-all"
                to={"/profile"}
              >
                Profile
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-light hover:text-hirwa hover:text-base transition-all"
                to={"/contact-us"}
              >
                Contact Us
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm hover:text-hirwa hover:text-base transition-all text-light"
                to={"/faq"}
              >
                FAQ
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex gap-x-4 lg:ml-auto lg:mr-10">
            <Link
              className="flex items-center justify-center gap-x-1 relative bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 py-2 px-6 hover:bg-transparent hover:text-white hover:border"
              to={"/cart"}
            >
              <div className="aspect-square rounded-full absolute -top-1 -right-1 bg-yellow-400 w-[25px] py-1 text-xs text-center text-black hover:animate-pulse">
                {cart.length > 9 ? "9+" : cart.length}
              </div>
              Cart <BsCart4 />
            </Link>
            <Link
              className="bg-gray-50 text-sm text-gray-900 font-bold  rounded-xl transition duration-200 py-2 px-6 hover:bg-transparent hover:text-white hover:border"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </div>
        </nav>
        <nav
          className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto ${showMenu}`}
        >
          <div className="flex items-center mb-8">
            <button
              className="navbar-close absolute right-4 top-5"
              onClick={handleClick}
            >
              <svg
                className="h-6 w-6 text-light cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-8">
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  to={"/profile"}
                >
                  Profile
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  to={"/contact-us"}
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-light hover:bg-blue-50 hover:text-hirwa rounded"
                  to={"/faq"}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-3 leading-loose text-black text-xs text-center font-bold lg:leading-none bg-gray-100 hover:bg-gray-200 rounded-xl"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-light">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
        {/* </div> */}
      </section>
    </>
  );
};

export default Navbar;
