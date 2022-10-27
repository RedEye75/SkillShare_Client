import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const datas = useLoaderData();
  console.log(datas);

  return (
    <div className="grid lg:grid-cols-3 px-28 md:grid-cols-2 sm:grid-cols-1 gap-11">
      {datas.map((data) => (
        <Course key={data.id} data={data}></Course>
      ))}
    </div>
  );
};

export default Courses;
