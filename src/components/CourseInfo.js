import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseInfo = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <article className="overflow-hidden bg-blue-200  w-6/12 mx-auto my-10  rounded-lg  transition shadow-lg">
        <img
          alt="Office"
          src={info.image}
          className="h-full w-full object-cover"
        />

        <div className="p-4 shadow-lg sm:p-6">
          <h3 className="text-2xl text-blue-600 font-serif font-bold">
            {info.title}
          </h3>

          <p className="mt-2 text-start font-bold leading-relaxed text-gray-500  line-clamp-3">
            {info.description}
          </p>
          <div className="flex justify-evenly mt-3">
            <button className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

              <span className="relative text-sm font-bold  text-indigo-600 transition-colors group-hover:text-white">
                Download
              </span>
            </button>

            <Link to={`/buyCourse/${info.id}`}>
              <button className="group px-8 py-4 relative inline-block  overflow-hidden border border-rose-600  focus:outline-none focus:ring">
                <span className="absolute inset-y-0 left-0 w-[2px] bg-rose-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                <span className="relative flex text-sm font-medium text-rose-600 transition-colors">
                  <p className="text-1xl  mr-2 font-bold  group-hover:text-white text-rose-600 ">
                    Buy
                  </p>
                  <p className="text-1xl font-bold  group-hover:text-white text-rose-600 ">
                    ${info.price}
                  </p>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CourseInfo;
