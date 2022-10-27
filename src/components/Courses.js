import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
	const datas = useLoaderData();
	console.log(datas);

	return (
		<div>
			<h1 className="text-5xl text-rose-600 font-bold font-serif m-10 border-b">Explore our Courses</h1>

			<div className="grid lg:grid-cols-3 py-10 px-28 md:grid-cols-2 sm:grid-cols-1 gap-11">
				{datas.map((data) => (
					<Course key={data.id} data={data}></Course>
				))}
			</div>
		</div>
	);
};

export default Courses;
