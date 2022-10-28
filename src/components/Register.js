import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { ProviderLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 ml-96 mt-40 dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched  ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-4 rounded-md dark:border-gray-700 dark:bg-slate-300 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-4 bg-slate-300 rounded-md dark:border-gray-700 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button className="block w-64 mx-auto p-3 text-center hover:bg-yellow-400 rounded-sm dark:text-gray-900 dark:bg-rose-800">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FaGoogle></FaGoogle>
          </button>

          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub></FaGithub>
          </button>
        </div>
        <p className="text-xs text-center font-bold sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
            to={"/signIn"}
            className="underline m-3 font-bold dark:text-gray-100"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
