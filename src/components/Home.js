import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="relative bg-[url(https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1380&t=st=1666854215~exp=1666854815~hmac=9547b8c2af42abeffd92662d1f0a7647a21821e002a38dbbf25d3532d48ef8ec)] bg-cover bg-center bg-no-repeat mb-10">
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
              <Link className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-bold text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Get Started
              </Link>

              <Link className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-bold text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
