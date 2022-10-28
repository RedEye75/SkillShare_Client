import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { ProviderLogin, createUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        form.reset();
        setError(" ");
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 mx-auto h-full   dark:text-black">
        <h1 className="text-2xl text-black font-bold text-center">Register</h1>
        <form
          onSubmit={handleSubmit}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched  ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-4 rounded-md bg-gray-200 text-black  border-violet-400 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Your Photo"
              className="w-full px-4 py-4 rounded-md bg-gray-200 text-black  border-violet-400 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-4 rounded-md bg-gray-200 text-black  border-violet-400 "
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-4 rounded bg-gray-200 text-black  border-violet-400"
            />
          </div>

          <label class="ml-2 block text-sm text-rose-700 text-start">
            {error}
          </label>

          <button className="block w-64 mx-auto font-bold p-3 text-center hover:bg-yellow-400 rounded-sm dark:text-gray-900  bg-green-400">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm text-black">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <Link
              className="inline-flex items-center  rounded gap-2 border-[#171515] bg-[#171515] border-2 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
              target="_blank"
            >
              Google <FaGoogle></FaGoogle>
            </Link>
          </button>

          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <Link
              className="inline-flex items-center rounded  gap-2 border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
              href="/github"
              target="_blank"
            >
              GitHub
              <FaGithub></FaGithub>
            </Link>
          </button>
        </div>
        <p className="text-xs text-center font-bold sm:px-6 text-black">
          Already have an account?
          <Link
            to={"/signIn"}
            className="underline m-3 font-bold dark:text-rose-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
