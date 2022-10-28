import React from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 mx-auto dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-4 rounded-lg dark:border-gray-700 bg-white dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-4 rounded-lg dark:border-gray-700 bg-white  dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link>Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-64 mx-auto hover:bg-rose-600  p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Didn't have an account?
            <Link to={"/register"} className="underline m-3 dark:text-gray-100">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
