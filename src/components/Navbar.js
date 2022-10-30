// -------------------------------------------***---------------------------------------

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* Page Container */}
      <div id="page-container">
        {/* Page Header */}
        <header
          id="page-header"
          className="flex flex-none  border-b-2 items-center bg-white shadow-sm z-1"
        >
          <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
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
                {/* END Logo */}
              </div>
              {/* END Left Section */}

              {/* Right Section */}
              <div className="flex items-center space-x-1 lg:space-x-5">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:items-center lg:space-x-2">
                  <Link
                    to={"/"}
                    className="hover:text-rose-700 uppercase font-bold items-center px-4 -mb-1"
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    to={"/blog"}
                    className="hover:text-rose-700 uppercase font-bold items-center px-4 -mb-1"
                  >
                    <span>Blog</span>
                  </Link>
                  <Link
                    to={"/courses"}
                    className="hover:text-rose-700 uppercase font-bold items-center px-4 -mb-1"
                  >
                    <span>COURSES</span>
                  </Link>
                  <Link
                    to={"/faq"}
                    className="hover:text-rose-700 uppercase font-bold items-center px-4 -mb-1"
                  >
                    <span>FAQ</span>
                  </Link>

                  <label
                    for="AcceptConditions"
                    class="relative h-8 w-14 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="AcceptConditions"
                      class="peer sr-only"
                    />

                    <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>

                    <span class="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
                  </label>

                  <div className="items-center gap-5  flex-shrink-0 hidden lg:flex">
                    {user?.uid ? (
                      <button
                        className="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"
                        onClick={handleLogOut}
                        type="submit"
                      >
                        <span className="absolute inset-y-0 left-0 w-[2px] bg-red-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                        <span className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
                          Logout
                        </span>
                      </button>
                    ) : (
                      <>
                        <Link to={"/signIn"}>
                          <button className="group relative inline-block  overflow-hidden border border-orange-600 px-8 py-3 focus:outline-none focus:ring">
                            <span class="absolute inset-y-0 right-0 w-[2px] bg-orange-600 transition-all group-hover:w-full group-active:bg-orange-500"></span>

                            <span class="relative text-sm font-medium text-orange-600 transition-colors group-hover:text-white">
                              Sign In
                            </span>
                          </button>
                        </Link>

                        <Link to={"/register"}>
                          <button className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-none focus:ring">
                            <span class="absolute inset-x-0 top-0 h-[2px] bg-green-400 transition-all group-hover:h-full group-active:bg-green-400"></span>

                            <span class="relative text-sm font-medium text-green-400 transition-colors group-hover:text-white">
                              Register
                            </span>
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </nav>
                {/* END Desktop Navigation */}

                {/* Toggle Mobile Navigation */}
                <div className="lg:hidden">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* END Toggle Mobile Navigation */}
              </div>
              {/* END Right Section */}
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
              <nav className="flex flex-col space-y-2 py-4 border-t">
                <Link
                  to={"/"}
                  className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50 text-blue-500"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-home inline-block w-5 h-5"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Home</span>
                </Link>
                <Link
                  to={"/blog"}
                  className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>BLOG</span>
                </Link>
                <Link
                  to={"/courses"}
                  className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>COURSES</span>
                </Link>
                <Link
                  to={"/faq"}
                  className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-cog inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>FAQ</span>
                </Link>
              </nav>
            </div>
            {/* END Mobile Navigation */}
          </div>
        </header>
        {/* END Page Header */}
      </div>
    </>
  );
}
