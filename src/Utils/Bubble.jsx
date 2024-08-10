export function bubbleSort(array, order = "ascending") {
	const steps = [];
	const arr = [...array];

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			steps.push({
				array: [...arr],
				current: [j, j + 1],
				sorted: [],
			});
			if (
				(order === "ascending" && arr[j] > arr[j + 1]) ||
				(order === "descending" && arr[j] < arr[j + 1])
			) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
		steps.push({
			array: [...arr],
			current: [],
			sorted: [arr.length - i - 1],
		});
	}

	for (let i = 0; i < arr.length; i++) {
		steps.push({
			array: [...arr],
			current: [],
			sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
		});
	}

	return steps;
}
