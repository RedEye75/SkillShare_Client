import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-6">
        <div className="col-span-1 lg:block md:block hidden">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-5">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
