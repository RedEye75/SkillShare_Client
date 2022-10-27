import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <outlet></outlet>
    </div>
  );
};

export default Main;
