import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Sidebar = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/courses')
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
		<div>
			<div className="  py-96 space-y-2 h-full   dark:bg-gray-800 dark:text-black">
				<div className="flex items-center p-2 space-x-4">
					{user?.photoURL ? (
						<img className="h-12 w-12 rounded-full " src={user?.photoURL} alt="" />
					) : (
						<FaUser></FaUser>
					)}
					<div>
						<h2 className="text-lg text-white  font-semibold">
							{user?.uid ? (
								<span>{user?.displayName}</span>
							) : (
								<p>
									<span className="border-b mx-auto">username</span>
								</p>
							)}
						</h2>
					</div>
				</div>
				<div className="divide-y divide-gray-700">
					<ul className="pt-2 pb-4 space-y-1 text-sm">
						{courses.map((course) => (
							<p key={course.id} className=" p-2  rounded-md px-8 font-semibold hover:text-yellow-400 ">
								<Link to={`/courses/${course.id}`}>
									<button className="p-5 rounded-md px-14 hover:bg-rose-600 bg-white ">
										{course.title}
									</button>
								</Link>
							</p>
						))}
					</ul>
					<ul className="pt-4 pb-2 space-y-1 text-sm">
						<li>
							<Link className="flex  items-center p-2 space-x-3 rounded-md">
								<button
									onClick={handleLogOut}
									className="hover:bg-red-600  rounded-md mx-auto p-5 m-5 px-8 bg-white font-semibold hover:text-yellow-400 "
								>
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
