import React from "react";
import { Link } from "react-router-dom";
const Course = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="max-w-xs rounded-lg border-solid shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={data.image}
          alt=""
          className="object-cover hover:opacity-75  object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
        <div className="flex flex-col  justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl text-blue-600 font-serif font-bold">
              {data.title}
            </h1>
            <p className="font-semibold font-sans text-start">
              {data.description.slice(0, 120) + "..."}{" "}
            </p>

            <div className="lg:flex  justify-between block">
              <button>
                <Link
                  to={`/courses/${data.id}`}
                  class="group relative inline-block overflow-hidden border border-orange-600 px-8 py-3 focus:outline-none focus:ring"
                  href="/download"
                >
                  <span class="absolute inset-y-0 left-0 w-[2px] bg-orange-600 transition-all group-hover:w-full group-active:bg-orange-500"></span>

                  <span class="relative text-sm font-medium text-orange-600 transition-colors group-hover:text-white">
                    READ MORE
                  </span>
                </Link>
              </button>
              <p className="text-1xl font-bold text-orange-600 py-3">
                $ {data.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
