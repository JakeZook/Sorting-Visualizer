import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleClick = (path) => () => {
		navigate(path);
	};

	return (
		<div>
			<h1>Home</h1>
			<button onClick={handleClick("/sorter")}>Sort</button>
			<button onClick={handleClick("/pathfinder")}>Path</button>
			<button onClick={handleClick("/searcher")}>Search</button>
		</div>
	);
};

export default Home;
