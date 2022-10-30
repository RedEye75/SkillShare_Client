import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://skill-share-server-eight.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="border-r-4 border-rose-900 mt-10 ">
      <div className="border-b-2   border-red-800">
        {" "}
        {user?.photoURL ? (
          <img
            className="rounded-full h-12 w-12 mx-auto"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <div className="mx-20 px-8 text-3xl m-5">
            <FaUser></FaUser>
          </div>
        )}
        {user?.uid ? (
          <h1 className="font-bold font-serif">
            <span>{user?.displayName}</span>
          </h1>
        ) : (
          <p className="uppercase font-serif font-bold">
            <span>Name</span>
          </p>
        )}
      </div>
      <div className="flow-root">
        <nav aria-label="Main Nav" className="flex flex-col space-y-2">
          <div>
            <h1 className="text-1xl font-serif font-bold text-rose-600  ">
              Premium Courses
            </h1>

            <ul className="mt-2 space-y-1">
              <li>
                {courses.map((course) => (
                  <p
                    key={course.id}
                    className="block text-start px-4 py-4 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-rose-700"
                  >
                    <Link to={`/courses/${course.id}`}>
                      <button>{course.title}</button>
                    </Link>
                  </p>
                ))}
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-2 space-y-1">
              <li>
                <button
                  className="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"
                  onClick={handleLogOut}
                  type="submit"
                >
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-red-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                  <span className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
