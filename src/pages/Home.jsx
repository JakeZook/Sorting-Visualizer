import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleClick = (path) => () => {
		navigate(path);
	};

	return (
		<div className="flex justify-center flex-col items-center">
			<div className="p-12 flex flex-col justify-center items-center">
				<h1 className="text-5xl text-center text-red-500">
					Algorithm Visualizer
				</h1>
				<h2 className="text-white text- pt-4 text-2xl">Jake Zook</h2>
			</div>
			<div className="flex flex-col">
				<button
					className="btn btn-lg bg-blue-500 text-white my-5 hover:bg-blue-700 hover:scale-110"
					onClick={handleClick("/sorter")}
				>
					Sorting Algorithms
				</button>
				<button
					className="btn btn-lg bg-green-500 text-white my-5 hover:bg-green-700 hover:scale-110"
					onClick={handleClick("/searcher")}
				>
					Searching Algorithms
				</button>
				<button
					className="btn btn-lg bg-red-500 text-white my-5 hover:bg-red-700 hover:scale-110"
					onClick={handleClick("/pathfinder")}
				>
					Path Finding Algorithms
				</button>
			</div>
		</div>
	);
};

export default Home;
