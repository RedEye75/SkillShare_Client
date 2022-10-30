import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(" ");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 mx-auto ">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <form
          onSubmit={handleSubmit}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="email"
              id="username"
              placeholder="Your Email"
              className="w-full px-4 py-4 rounded-lg bg-gray-200 text-black  border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="w-full px-4 py-4 rounded-lg bg-gray-200 text-black  border-violet-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link>Forgot Password?</Link>
            </div>
          </div>

          <label class="ml-2 block text-sm text-rose-700 text-start">
            {error}
          </label>

          <button className="block w-64 mx-auto hover:bg-rose-600  p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Didn't have an account?
            <Link
              to={"/register"}
              className="underline font-serif font-bold m-3 text-black"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
