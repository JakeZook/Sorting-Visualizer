import { React } from "react";
import { useNavigate } from "react-router-dom";

const Pathfinding = () => {
	const navigate = useNavigate();

	const handleLinkClick = (path) => () => {
		navigate(path);
	};

	return (
		<div className="flex justify-center flex-col items-center my-48">
			<h1 className="text-red-500 text-5xl mb-12">
				Path Finding Algorithm Visualizer
			</h1>
			<h2 className="text-blue-500 text-5xl mb-12">Coming Soon!</h2>
			<button
				className="btn btn-lg bg-blue-500 text-md text-nowrap text-white hover:bg-blue-800 hover:scale-105 mb-4 mx-4 w-40"
				onClick={handleLinkClick("/")}
			>
				Home
			</button>
		</div>
	);
};

export default Pathfinding;
