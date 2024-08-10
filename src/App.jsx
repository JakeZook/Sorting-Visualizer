import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Sorting, Pathfinding, Searching } from "./pages/Index.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Sorting />} />
				<Route path="/sorter" element={<Sorting />} />
				<Route path="/pathfinder" element={<Pathfinding />} />
				<Route path="/searcher" element={<Searching />} />
			</Routes>
		</Router>
	);
}

export default App;
