import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { aStar, data } from "../Utils/index";

const Pathfinding = () => {
	const [gridSize, setGridSize] = useState(20);
	const [grid, setGrid] = useState(
		Array(gridSize)
			.fill()
			.map(() => Array(gridSize).fill(0))
	);
	const [start, setStart] = useState(null);
	const [end, setEnd] = useState(null);
	const [barriers, setBarriers] = useState(new Set());
	const [steps, setSteps] = useState([]);
	const [path, setPath] = useState([]);
	const [isAnimating, setIsAnimating] = useState(false);
	const [canStart, setCanStart] = useState(false);
	const [speed, setSpeed] = useState(500);
	const [algData, setAlgData] = useState(data.find((d) => d.name === "A*"));

	const navigate = useNavigate();

	const handleLinkClick = (path) => () => {
		navigate(path);
	};

	// Update grid size based on screen size
	const updateGridSize = () => {
		if (window.innerWidth < 768) {
			setGridSize(6); // Mobile
		} else if (window.innerWidth < 1024) {
			setGridSize(10); // Tablet
		} else {
			setGridSize(20); // Desktop/Laptop
		}
	};

	// Initialize grid when gridSize changes
	useEffect(() => {
		updateGridSize();
		setGrid(
			Array(gridSize)
				.fill()
				.map(() => Array(gridSize).fill(0))
		);
	}, [gridSize]);

	useEffect(() => {
		window.addEventListener("resize", updateGridSize);
		return () => window.removeEventListener("resize", updateGridSize);
	}, []);

	const handleCellClick = (row, col) => {
		if (!start) {
			setStart({ row, col });
		} else if (!end && (row !== start.row || col !== start.col)) {
			setEnd({ row, col });
			setCanStart(true);
		} else if (start && end) {
			const key = `${row}-${col}`;
			const newBarriers = new Set(barriers);
			if (newBarriers.has(key)) {
				newBarriers.delete(key);
			} else {
				newBarriers.add(key);
			}
			setBarriers(newBarriers);
		}
	};

	const visualizePathfinding = () => {
		if (!start || !end) {
			alert("Please set both start and end cells.");
			return;
		}

		setCanStart(false);
		setIsAnimating(true);
		const { path, steps } = aStar(start, end, barriers, gridSize);
		setPath(path);
		setSteps(steps);

		const animateSteps = (index = 0) => {
			if (index >= steps.length) {
				animatePath();
				return;
			}

			setGrid((prevGrid) => {
				const newGrid = prevGrid.map((row) => row.slice());
				const { row, col } = steps[index];
				newGrid[row][col] = 3;
				return newGrid;
			});

			setTimeout(() => animateSteps(index + 1), speed);
		};

		const animatePath = (index = 0) => {
			if (index >= path.length) {
				setIsAnimating(false);
				return;
			}

			setGrid((prevGrid) => {
				const newGrid = prevGrid.map((row) => row.slice());
				const { row, col } = path[index];
				newGrid[row][col] = 2;
				return newGrid;
			});

			setTimeout(() => animatePath(index + 1), speed * 2);
		};

		animateSteps();
	};

	const getCellClass = (row, col) => {
		const key = `${row}-${col}`;
		if (start && start.row === row && start.col === col) return "bg-green-500";
		if (end && end.row === row && end.col === col) return "bg-red-500";
		if (barriers.has(key)) return "bg-gray-500";
		if (grid[row][col] === 2) return "bg-green-700";
		if (grid[row][col] === 3) return "bg-blue-700";
		return "bg-blue-500";
	};

	const resetGrid = () => {
		setStart(null);
		setEnd(null);
		setBarriers(new Set());
		setGrid(
			Array(gridSize)
				.fill()
				.map(() => Array(gridSize).fill(0))
		);
		setPath([]);
		setSteps([]);
	};

	const handleSpeedChange = (e) => {
		setSpeed(Number(e.target.value));
	};

	return (
		<div>
			<div className="flex justify-center flex-col items-center">
				<h1 className="text-2xl font-bold pt-4 mb-4 text-red-500 text-center">
					Path Finding Algorithm Visualizer
				</h1>
				<button
					className="btn btn-sm bg-blue-500 text-md text-nowrap text-white hover:bg-blue-800 hover:scale-105 mb-4 mx-4 w-40 max-sm:mb-12"
					onClick={handleLinkClick("/")}
				>
					Home
				</button>
			</div>
			<div className="flex justify-center max-md:flex-col-reverse items-center">
				<div className="flex flex-col items-center justify-center">
					<button
						className="btn bg-red-500 text-md text-nowrap text-white hover:bg-red-800 hover:scale-105 mb-4 mx-4 w-40"
						onClick={resetGrid}
					>
						Clear Grid
					</button>
					<button
						className={`btn bg-green-500 text-md text-nowrap text-white hover:bg-green-800 hover:scale-105 mb-4 mx-4 w-40 ${
							canStart ? "" : "opacity-50 cursor-not-allowed"
						}`}
						onClick={visualizePathfinding}
					>
						Start
					</button>
				</div>
				<div className="mx-4 flex flex-col justify-center items-center max-md:pb-4">
					<label className="block text-lg mb-2 text-white text-center">
						Speed: {speed} ms
					</label>
					<input
						type="range"
						min="50"
						max="1000"
						step="10"
						value={speed}
						onChange={handleSpeedChange}
						className="range [--range-shdw:blue] border border-white hover:scale-110"
					/>
				</div>
				<div className="mx-4 flex flex-col justify-center items-center w-36 max-md:pb-4">
					<p className="text-center text-white">
						Click a square to add the start point, then end point, then click
						any to add walls. WHen satisfied, click start.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center my-8 border-b-8 border-blue-500 rounded pb-10 mx-8">
				<div
					className="grid border-2 border-black"
					style={{
						gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
						gridTemplateRows: `repeat(${gridSize}, 1fr)`,
						width: `${gridSize * 35}px`,
						height: `${gridSize * 35}px`,
					}}
				>
					{grid.map((row, rowIndex) =>
						row.map((cell, colIndex) => (
							<div
								key={`${rowIndex}-${colIndex}`}
								className={`w-full h-full border-2 border-black ${getCellClass(
									rowIndex,
									colIndex
								)}`}
								onClick={() => handleCellClick(rowIndex, colIndex)}
							/>
						))
					)}
				</div>
			</div>
			<div className="py-10 flex flex-col items-center justify-center">
				<h1 className="text-3xl text-red-500">{algData.name} Explanation:</h1>
				<p className="text-lg text-white text-center py-3 w-1/2">
					{algData.desc}
				</p>
				<div>
					<h2 className="text-3xl text-red-500 pt-5 text-center">
						Time Complexity:
					</h2>
					{algData.time.map((time) => (
						<div
							key={time.name}
							className="text-white p-3 flex justify-center flex-col items-center"
						>
							<h2
								className={`text-2xl ${
									time.name === "Best"
										? "text-green-500"
										: time.name === "Average"
										? "text-yellow-500"
										: "text-orange-500"
								}`}
							>
								{time.name}: {time.value}
							</h2>
							<p className="text-center">{time.desc}</p>
						</div>
					))}
					<div className="flex justify-center items-center py-10 max-md:flex-col">
						<div className="mx-10">
							<h2 className="text-3xl text-red-500 text-center">
								Step By Step:
							</h2>
							{algData.steps.map((step, index) => (
								<div
									key={index}
									className="text-white p-3 flex flex-col items-center justify-center text-center"
								>
									<p>
										<span className="font-bold">{index + 1}.</span> {step}
									</p>
								</div>
							))}
						</div>
					</div>
					<h2 className="text-3xl text-red-500 pt-5 text-center">
						Space Complexity:
					</h2>
					{algData.space.map((space) => (
						<div
							key={space.name}
							className="text-white p-3 flex flex-col items-center justify-center"
						>
							<h2 className="text-2xl text-blue-500">
								{space.name}: {space.value}
							</h2>
							<p className="text-center">{space.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pathfinding;
