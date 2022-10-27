import React from "react";
import { Link } from "react-router-dom";
const Course = ({ data }) => {
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-serif font-bold">{data.title}</h1>
            <p className="font-semibold font-sans">
              {data.description.slice(0, 140) + "..."}{" "}
              <Link
                className="font-bold text-blue-600"
                to={`/courses/${data.id}`}
              >
                read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
