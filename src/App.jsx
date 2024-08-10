import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Sorting, Pathfinding, Searching } from "./pages/Index.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sorter" element={<Sorting />} />
				<Route path="/searcher" element={<Searching />} />
				<Route path="/pathfinder" element={<Pathfinding />} />
			</Routes>
		</Router>
	);
}

export default App;
