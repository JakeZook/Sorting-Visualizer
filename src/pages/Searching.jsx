import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	linearSearch,
	binarySearch,
	jumpSearch,
	interpolationSearch,
	ternarySearch,
	bubbleSortSearch,
	data,
} from "../Utils";

const generateRandomArray = (size) => {
	const arr = Array.from(
		{ length: size },
		() => Math.floor(Math.random() * 100) + 1
	);

	return bubbleSortSearch(arr);
};

const Searching = () => {
	const [arraySize, setArraySize] = useState(10);
	const [array, setArray] = useState(generateRandomArray(10));
	const [target, setTarget] = useState(array[0]);
	const [steps, setSteps] = useState([]);
	const [currentStep, setCurrentStep] = useState(0);
	const [isSearching, setIsSearching] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [speed, setSpeed] = useState(500);
	const [algorithm, setAlgorithm] = useState("linear");
	const [maxArraySize, setMaxArraySize] = useState(100);
	const [algData, setAlgData] = useState(data.find((d) => d.name === "Linear"));

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
		if (target !== null && !array.includes(target)) {
			setTarget(array[0]);
		}
	}, [array]);

	useEffect(() => {
		let searchSteps;

		if (algorithm === "linear") {
			searchSteps = linearSearch(array, target, (index) => {
				setSteps((prevSteps) => {
					const newSteps = [...prevSteps];
					newSteps.push({ array: [...array], current: [index], found: null });
					return newSteps;
				});
			});
			setAlgData(data.find((d) => d.name === "Linear"));
		} else if (algorithm === "binary") {
			searchSteps = binarySearch(array, target, (index) => {
				setSteps((prevSteps) => {
					const newSteps = [...prevSteps];
					newSteps.push({ array: [...array], current: [index], found: index });
					return newSteps;
				});
				console.log(steps);
			});
			setAlgData(data.find((d) => d.name === "Binary"));
		} else if (algorithm === "jump") {
			searchSteps = jumpSearch(array, target, (index) => {
				setSteps((prevSteps) => {
					const newSteps = [...prevSteps];
					newSteps.push({ array: [...array], current: [index], found: null });
					return newSteps;
				});
			});
			setAlgData(data.find((d) => d.name === "Jump"));
		} else if (algorithm === "interpolation") {
			searchSteps = interpolationSearch(array, target, (index) => {
				setSteps((prevSteps) => {
					const newSteps = [...prevSteps];
					newSteps.push({ array: [...array], current: [index], found: index });
					return newSteps;
				});
			});
			setAlgData(data.find((d) => d.name === "Interpolation"));
		} else if (algorithm === "ternary") {
			searchSteps = ternarySearch(array, target, (index) => {
				setSteps((prevSteps) => {
					const newSteps = [...prevSteps];
					newSteps.push({ array: [...array], current: [index], found: index });
					return newSteps;
				});
			});
			setAlgData(data.find((d) => d.name === "Ternary"));
		}

		searchSteps.then((steps) => {
			setSteps(steps || []);
			setCurrentStep(0);
			setIsSearching(false);
			setIsPaused(false);
		});
	}, [array, algorithm, target]);

	useEffect(() => {
		let interval;
		if (isSearching && !isPaused) {
			interval = setInterval(() => {
				if (currentStep < steps.length) {
					setCurrentStep((prevStep) => prevStep + 1);
				} else {
					clearInterval(interval);
				}
			}, speed);
		}
		return () => clearInterval(interval);
	}, [currentStep, steps, isSearching, isPaused, speed]);

	const handleStart = () => {
		setIsSearching(true);
		setIsPaused(false);
		// Ensure the first block turns red immediately
		if (steps.length > 0) {
			setCurrentStep(0); // Start from the first step
		}
	};

	const handlePause = () => {
		setIsPaused(true);
	};

	const handleResume = () => {
		setIsPaused(false);
	};

	const handleGenerateNewArray = () => {
		setArray(generateRandomArray(arraySize));
		setCurrentStep(0); // Reset current step to 0
		setSteps([]); // Clear steps
		setIsSearching(false); // Stop any ongoing search
		setIsPaused(false); // Ensure paused state is reset
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

	const handleTargetChange = (e) => {
		const newTarget = Number(e.target.value);
		if (array.includes(newTarget)) {
			setTarget(newTarget);
		}
	};

	return (
		<div className="App p-6 text-center h-screen">
			<h1 className="text-2xl font-bold mb-4 text-red-500">
				Search Algorithm Visualizer
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
								isSearching ? "hidden" : ""
							}`}
							onClick={handleStart}
						>
							Start
						</button>
						<button
							className={`btn bg-yellow-500 mb-4 mx-4 text-2xl text-white hover:bg-yellow-700 hover:scale-105 w-40 ${
								!isSearching || isPaused ? "hidden" : ""
							}`}
							onClick={handlePause}
						>
							Pause
						</button>
						<button
							className={`btn bg-green-500 mb-4 mx-4 text-2xl text-white hover:bg-green-700 hover:scale-105 w-40 ${
								!isSearching || !isPaused ? "hidden" : ""
							}`}
							onClick={handleResume}
						>
							Resume
						</button>
					</>
				</div>
				<div className="flex items-center max-md:flex-col justify-center">
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
				</div>
				<div className="mx-4">
					<label className="block text-lg mb-2 text-white">Algorithm:</label>
					<select
						value={algorithm}
						onChange={handleAlgorithmChange}
						className="select select-bordered bg-green-500 border-white text-white hover:scale-110"
					>
						<option value="linear">Linear Search</option>
						<option value="binary">Binary Search</option>
						<option value="jump">Jump Search</option>
						<option value="interpolation">Interpolation Search</option>
						<option value="ternary">Ternary Search</option>
					</select>
				</div>
			</div>
			<div className="flex justify-center pb-12 border-b-8 border-blue-500">
				<div className="w-full max-w-[600px] h-full">
					<div className="mb-4">
						<label className="block text-lg mb-2 text-white">Set Target:</label>
						<select
							className="select select-bordered text-white  w-24"
							value={target || ""}
							onChange={handleTargetChange}
						>
							<option value="" disabled>
								Target
							</option>
							{array.map((value, index) => (
								<option key={index} value={value}>
									{value}
								</option>
							))}
						</select>
					</div>
					<div className="w-full h-full flex items-end justify-center flex-wrap">
						{array.map((value, index) => (
							<div
								key={index}
								className={`w-12 h-12 mx-1 my-1 flex items-center justify-center ${
									steps
										.slice(0, currentStep)
										.some((step) => step.current.includes(index)) &&
									steps.some((step) => step.found === index)
										? "bg-green-500"
										: steps
												.slice(0, currentStep)
												.some((step) => step.current.includes(index))
										? "bg-red-500"
										: "bg-blue-500"
								} border border-transparent transition-colors duration-200`}
								style={{
									boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
									fontSize: "1rem",
									color: "white",
									lineHeight: "1.2",
								}}
							>
								{value}
							</div>
						))}
					</div>
				</div>
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

export default Searching;
