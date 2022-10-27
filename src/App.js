import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Blog from "./components/Blog";
import CourseInfo from "./components/CourseInfo";
import Courses from "./components/Courses";
import Error from "./components/Error";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Main from "./layout/Main";

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
          loader: () => fetch("http://localhost:5000/courses"),
          element: <Courses></Courses>,
        },
        {
          path: "/courses/:id",
          element: <CourseInfo></CourseInfo>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/courses/${params.id}`),
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
