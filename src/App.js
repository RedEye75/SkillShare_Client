import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Blog from "./components/Blog";
import CourseInfo from "./components/CourseInfo";
import Courses from "./components/Courses";
import Error from "./components/Error";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Faq from "./components/Faq";
import Register from "./components/Register";
import Main from "./layout/Main";
import PrivateRoute from "./route/PrivateRoute";
import BuyCourse from "./components/BuyCourse/BuyCourse";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/", element: <Home></Home> },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/courses",
          loader: () =>
            fetch("https://skill-share-server-eight.vercel.app/courses"),
          element: <Courses></Courses>,
        },
        { path: "/faq", element: <Faq></Faq> },
        {
          path: "/courses/:id",
          element: (
            <PrivateRoute>
              <CourseInfo></CourseInfo>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://skill-share-server-eight.vercel.app/courses/${params.id}`
            ),
        },
        {
          path: "/buyCourse/:id",
          element: <BuyCourse></BuyCourse>,
          loader: ({ params }) => {
            fetch(
              `https://skill-share-server-eight.vercel.app/courses/buyCourse/${params.id}`
            );
          },
        },
        { path: "/signIn", element: <LogIn></LogIn> },
        { path: "/register", element: <Register></Register> },
        { path: "*", element: <Error></Error> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
