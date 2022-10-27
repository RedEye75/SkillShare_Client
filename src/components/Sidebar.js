import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex items-center p-2 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {courses.map((course) => (
              <p
                key={course.id}
                className="hover:bg-blue-800 p-2 rounded-md px-8 font-semibold hover:text-yellow-400 "
              >
                <Link to={`/courses/${course.id}`}>{course.title}</Link>
              </p>
            ))}
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li>
              <Link className="flex  items-center p-2 space-x-3 rounded-md">
                <button className="hover:bg-blue-800 p-2 rounded-md px-8 font-semibold hover:text-yellow-400 ">
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
