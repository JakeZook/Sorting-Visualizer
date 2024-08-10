import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	mergeSort,
	bubbleSort,
	quickSort,
	selectionSort,
	insertionSort,
	data,
} from "../Utils/index";

const generateRandomArray = (size) => {
	return Array.from(
		{ length: size },
		() => Math.floor(Math.random() * 100) + 1
	);
};

const Sorting = () => {
	const [arraySize, setArraySize] = useState(10);
	const [array, setArray] = useState(generateRandomArray(10));
	const [steps, setSteps] = useState([]);
	const [currentStep, setCurrentStep] = useState(0);
	const [isSorting, setIsSorting] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [speed, setSpeed] = useState(500);
	const [algorithm, setAlgorithm] = useState("Bubble");
	const [sortOrder, setSortOrder] = useState("ascending");
	const [isFinalTransition, setIsFinalTransition] = useState(false);
	const [maxArraySize, setMaxArraySize] = useState(100);
	const [algData, setAlgData] = useState(data.find((d) => d.name === "Bubble"));

	const navigate = useNavigate();

	const handleLinkClick = (path) => () => {
		navigate(path);
	};

	useEffect(() => {
		const updateMaxArraySize = () => {
			if (window.innerWidth <= 721) {
				setMaxArraySize(30); // Small screens
			} else {
				setMaxArraySize(100); // Larger screens
			}
		};
		updateMaxArraySize(); // Set initial value

		window.addEventListener("resize", updateMaxArraySize);
		return () => window.removeEventListener("resize", updateMaxArraySize);
	}, []);

	useEffect(() => {
		setArray(generateRandomArray(arraySize));
	}, [arraySize]);

	useEffect(() => {
		let sortingSteps;

		if (algorithm === "Bubble") {
			sortingSteps = bubbleSort(array, sortOrder);
			setAlgData(data.find((d) => d.name === "Bubble"));
		} else if (algorithm === "Merge") {
			sortingSteps = mergeSort(array, sortOrder);
			setAlgData(data.find((d) => d.name === "Merge"));
		} else if (algorithm === "Quick") {
			sortingSteps = quickSort(array, sortOrder);
			setAlgData(data.find((d) => d.name === "Quick"));
		} else if (algorithm === "Selection") {
			sortingSteps = selectionSort(array, sortOrder);
			setAlgData(data.find((d) => d.name === "Selection"));
		} else if (algorithm === "Insertion") {
			sortingSteps = insertionSort(array, sortOrder);
			setAlgData(data.find((d) => d.name === "Insertion"));
		}

		setSteps(sortingSteps || []);
		setCurrentStep(0);
		setIsSorting(false);
		setIsPaused(false);
		setIsFinalTransition(false);
	}, [array, algorithm, sortOrder]);

	useEffect(() => {
		let interval;
		if (isSorting && !isPaused) {
			const currentSpeed = isFinalTransition ? speed / 2 : speed;
			interval = setInterval(() => {
				if (currentStep < steps.length - 1) {
					setCurrentStep((prevStep) => prevStep + 1);
					if (currentStep >= steps.length - arraySize) {
						setIsFinalTransition(true);
					}
				} else {
					clearInterval(interval);
				}
			}, currentSpeed);
		}
		return () => clearInterval(interval);
	}, [currentStep, steps, isSorting, isPaused, speed, isFinalTransition]);

	const handleStart = () => {
		setIsSorting(true);
		setIsPaused(false);
	};

	const handlePause = () => {
		setIsPaused(true);
	};

	const handleResume = () => {
		setIsPaused(false);
	};

	const handleGenerateNewArray = () => {
		setArray(generateRandomArray(arraySize));
	};

	const handleSpeedChange = (e) => {
		setSpeed(Number(e.target.value));
	};

	const handleArraySizeChange = (e) => {
		const newSize = Number(e.target.value);
		if (newSize <= maxArraySize) {
			setArraySize(newSize);
		}
	};

	const handleAlgorithmChange = (e) => {
		setAlgorithm(e.target.value);
	};

	const currentStepData = isSorting
		? steps[currentStep] || { array: array, current: [], sorted: [] }
		: { array: array, current: [], sorted: [] };

	return (
		<div className="App p-6 text-center h-screen">
			<h1 className="text-2xl font-bold mb-4 text-red-500">
				Sorting Algorithm Visualizer
			</h1>
			<button
				className="btn btn-sm bg-blue-500 text-md text-nowrap text-white hover:bg-blue-800 hover:scale-105 mb-4 mx-4 w-40"
				onClick={handleLinkClick("/")}
			>
				Home
			</button>
			<div className="flex justify-center mb-16 max-md:flex-col-reverse items-center max-md:mb-12">
				<div className="flex flex-col items-center max-md:mt-8">
					<button
						className="btn bg-blue-500 text-md text-nowrap text-white hover:bg-blue-800 hover:scale-105 mb-4 mx-4 w-40"
						onClick={handleGenerateNewArray}
					>
						Generate New Array
					</button>
					<>
						<button
							className={`btn bg-green-500 mb-4 mx-4 text-2xl text-white hover:bg-green-700 hover:scale-105 w-40 ${
								isSorting ? "hidden" : ""
							}`}
							onClick={handleStart}
						>
							Start
						</button>
						<button
							className={`btn bg-yellow-500 mb-4 mx-4 text-2xl text-white hover:bg-yellow-700 hover:scale-105 w-40 ${
								!isSorting || isPaused ? "hidden" : ""
							}`}
							onClick={handlePause}
						>
							Pause
						</button>
						<button
							className={`btn bg-green-500 mb-4 mx-4 text-2xl text-white hover:bg-green-700 hover:scale-105 w-40 ${
								!isSorting || !isPaused ? "hidden" : ""
							}`}
							onClick={handleResume}
						>
							Resume
						</button>
					</>
				</div>
				<div className="flex items-center max-md:flex-col justify-center">
					<div className="flex flex-col items-end">
						<div className="form-control">
							<label className="label cursor-pointer">
								<span className="label-text text-white pr-2">Ascending</span>
								<input
									type="radio"
									name="radio-10"
									className="radio checked:bg-blue-500"
									checked={sortOrder === "ascending"}
									onChange={() => setSortOrder("ascending")}
								/>
							</label>
						</div>
						<div className="form-control">
							<label className="label cursor-pointer">
								<span className="label-text text-white pr-2">Descending</span>
								<input
									type="radio"
									name="radio-10"
									className="radio checked:bg-red-500"
									checked={sortOrder === "descending"}
									onChange={() => setSortOrder("descending")}
								/>
							</label>
						</div>
					</div>
					<div className="mx-4">
						<label className="block text-lg mb-2 text-white">
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
					<div className="mx-4">
						<label className="block text-lg mb-2 text-white">
							Array Size: {arraySize}
						</label>
						<input
							type="range"
							min="5"
							max={maxArraySize}
							step="1"
							value={arraySize}
							onChange={handleArraySizeChange}
							className="range [--range-shdw:blue] border border-white hover:scale-110"
						/>
					</div>
					<div className="mx-4">
						<label className="block text-lg mb-2 text-white">Algorithm:</label>
						<select
							value={algorithm}
							onChange={handleAlgorithmChange}
							className="select select-bordered bg-green-500 border-white text-white hover:scale-110"
						>
							<option value="Bubble">Bubble Sort</option>
							<option value="Merge">Merge Sort</option>
							<option value="Quick">Quick Sort</option>
							<option value="Selection">Selection Sort</option>
							<option value="Insertion">Insertion Sort</option>
						</select>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-end h-96 border-b-8 border-blue-500 rounded pb-10">
				{currentStepData.array.map((value, index) => (
					<div
						key={index}
						className={`relative w-12 mx-1 max-md:w-8 max-sm:w-4 ${
							currentStepData.current.includes(index)
								? "bg-red-500"
								: currentStepData.sorted.includes(index)
								? "bg-green-500"
								: "bg-blue-500"
						} border border-transparent transition-colors duration-200`}
						style={{
							height: `${value * 4}px`,
						}}
					>
						<span
							className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs max-lg:hidden ${
								arraySize > 50 ? "hidden" : ""
							}`}
						>
							{value}
						</span>
					</div>
				))}
			</div>
			<div className="py-10 flex flex-col items-center">
				<h1 className="text-3xl text-red-500">
					{algData.name} Sort Explanation:
				</h1>
				<p className="text-lg text-white text-center py-3 w-1/2">
					{algData.desc}
				</p>
				<div>
					<h2 className="text-3xl text-red-500 pt-5">Time Complexity:</h2>
					{algData.time.map((time) => (
						<div key={time.name} className="text-white p-3">
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
							<p>{time.desc}</p>
						</div>
					))}
					<div className="flex justify-center items-center py-10 max-md:flex-col">
						<div className="mx-10">
							<h2 className="text-3xl text-red-500">Step By Step:</h2>
							{algData.steps.map((step, index) => (
								<div key={index} className="text-white p-3">
									<p>
										<span className="font-bold">{index + 1}.</span> {step}
									</p>
								</div>
							))}
						</div>
						<div className="mx-10">
							<h2 className="text-3xl text-red-500 pb-2">Example:</h2>
							<p className="text-lg text-blue-500">{algData.exampleArray}</p>
							{algData.example.map((example, index) => (
								<div key={index} className="text-white p-3">
									<p>
										<span className="font-bold">{index + 1}.</span> {example}
									</p>
								</div>
							))}
						</div>
					</div>
					<h2 className="text-3xl text-red-500 pt-5">Space Complexity:</h2>
					{algData.space.map((space) => (
						<div key={space.name} className="text-white p-3">
							<h2 className="text-2xl text-blue-500">
								{space.name}: {space.value}
							</h2>
							<p>{space.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sorting;
