import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="relative bg-[url(https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1380&t=st=1666854215~exp=1666854815~hmac=9547b8c2af42abeffd92662d1f0a7647a21821e002a38dbbf25d3532d48ef8ec)] bg-cover bg-center bg-no-repeat ">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Learn Without
              <strong className="block font-extrabold text-rose-700">
                Limits
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl font-bold sm:leading-relaxed">
              Looking to add new skills? Is there a hobby you’ve wanted to try?
              We’re always ready for you. <br />
              Stay with{" "}
              <strong className=" uppercase font-extrabold text-blue-700">
                Skilshare
              </strong>
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={"/courses"}
                className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-rose-700 focus:outline-none focus:ring active:text-rose-700"
              >
                <span class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span class="text-sm font-bold transition-all group-hover:ml-4">
                  Get Started
                </span>
              </Link>

              <Link
                to={"/blog"}
                className="group flex items-center px-12  justify-between  border rounded
                border-rose-600 bg-rose-600  py-3 transition-colors
                hover:bg-transparent focus:outline-none focus:ring"
              >
                <span class="font-medium text-white transition-colors group-hover:text-rose-600 ">
                  Blog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
