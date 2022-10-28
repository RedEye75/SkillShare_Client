import React from "react";
import { HiAcademicCap } from "react-icons/hi";
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
            <HiAcademicCap></HiAcademicCap>
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
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link to={"/signIn"}>
              <button className="self-center px-8 py-3 btn  hover:bg-rose-600 font-bold rounded dark:bg-green-500 dark:text-gray-900">
                Sign In
              </button>
            </Link>
            <Link to={"register"}>
              <button className="self-center ml-5 hover:bg-rose-500 px-8 py-3 font-semibold rounded dark:bg-cyan-400 dark:text-gray-900">
                Register
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
