// import React from "react";
// import { useContext } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

// const Sidebar = () => {
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/courses")
//       .then((res) => res.json())
//       .then((data) => setCourses(data));
//   }, []);
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.error(error));
//   };
//   return (
//     <div>
//       <div  classNameName=" space-y-2 h-full  dark:bg-gray-800 dark:text-black">
//         <div  classNameName="flex items-center p-2 space-x-4">
//           {user?.photoURL ? (
//             <img
//                classNameName="h-12 w-12 rounded-full "
//               src={user?.photoURL}
//               alt=""
//             />
//           ) : (
//             <FaUser></FaUser>
//           )}
//           <div>
//             <h2  classNameName="text-lg text-white  font-semibold">
//               {user?.uid ? (
//                 <span>{user?.displayName}</span>
//               ) : (
//                 <p>
//                   <span  classNameName="border-b justify-center">username</span>
//                 </p>
//               )}
//             </h2>
//           </div>
//         </div>
//         <div  classNameName="divide-y sticky top-0  divide-gray-700">
//           <ul  classNameName="pt-2 space-y-4 text-md">
//             {courses.map((course) => (
//               <p
//                 key={course.id}
//                  classNameName=" p-2  rounded-md px-8 font-semibold hover:text-yellow-400 "
//               >
//                 <Link to={`/courses/${course.id}`}>
//                   <button  classNameName="p-5 rounded-md px-14 hover:bg-rose-600 bg-white ">
//                     {course.title}
//                   </button>
//                 </Link>
//               </p>
//             ))}
//           </ul>
//           <ul  classNameName="pt-4 pb-2 space-y-1 text-sm">
//             <li>
//               <Link  classNameName="flex  items-center p-2 space-x-3 rounded-md">
//                 <button
//                   onClick={handleLogOut}
//                    classNameName="hover:bg-red-600  rounded-md mx-auto p-5 m-5 px-8 bg-white font-semibold hover:text-yellow-400 "
//                 >
//                   Logout
//                 </button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
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
    fetch("http://localhost:5000/courses")
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
    <div className="border-r-4 border-green-400">
      <div className="border-b-2  border-red-400">
        {" "}
        {user?.photoURL ? (
          <img
            className="rounded-full h-12 w-12 mx-auto"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <FaUser></FaUser>
        )}
        {user?.uid ? (
          <h1 className="font-bold">
            <span>{user?.displayName}</span>
          </h1>
        ) : (
          <p>
            <span>UserName</span>
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
                    className="block text-start rounded-lg px-4 py-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <Link to={`/courses/${course.id}`}>
                      <button classNameName="p-5 rounded-md px-14 hover:bg-rose-600 bg-white ">
                        {course.title}
                      </button>
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
                  <span class="absolute inset-y-0 left-0 w-[2px] bg-red-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                  <span class="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
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
