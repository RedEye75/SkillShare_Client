import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="p-4  dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to={"/home"}
            aria-label="Back to homepage"
            className="flex uppercase font-serif font-extrabold  hover:text-rose-700  text-3xl text-cyan-700 items-center p-2"
          >
            <img
              className="rounded-full bg-white mr-3 h-10 w-10"
              src="https://images.vexels.com/media/users/3/224169/isolated/lists/dbfe1f493ad01117fa4ec5ba10150e4d-computer-programming-logo.png"
              alt=""
            />
            skill_share
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                to={"/"}
                className="flex uppercase items-center px-4 -mb-1  hover:text-rose-700 font-bold"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/blog"}
                className="flex  hover:text-rose-700 uppercase font-bold items-center px-4 -mb-1 "
              >
                Blog
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/courses"}
                className="flex  hover:text-rose-700 uppercase font-bold items-center px-4 -mb-1 "
              >
                Courses
              </Link>
            </li>
            <li className="flex">
              <Link
                to={"/faq"}
                className="flex items-center px-4 uppercase -mb-1 hover:text-rose-700 font-bold"
              >
                Faq
              </Link>
            </li>
          </ul>
          <div className="items-center gap-5  flex-shrink-0 hidden lg:flex">
            <Link to={"/signIn"}>
              <button className="group relative inline-block  overflow-hidden border border-orange-600 px-8 py-3 focus:outline-none focus:ring">
                <span class="absolute inset-y-0 right-0 w-[2px] bg-orange-600 transition-all group-hover:w-full group-active:bg-orange-500"></span>

                <span class="relative text-sm font-medium text-orange-600 transition-colors group-hover:text-white">
                  Sign In
                </span>
              </button>
            </Link>
            <Link to={"/register"}>
              <button
                className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span class="absolute inset-x-0 top-0 h-[2px] bg-green-400 transition-all group-hover:h-full group-active:bg-green-400"></span>

                <span class="relative text-sm font-medium text-green-400 transition-colors group-hover:text-white">
                  Register
                </span>
              </button>
            </Link>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
