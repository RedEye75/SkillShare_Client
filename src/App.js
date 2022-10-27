import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Error from "./components/Error";
import Home from "./components/Home";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/", element: <Home></Home> },
      ],
    },

    { path: "*", element: <Error></Error> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
