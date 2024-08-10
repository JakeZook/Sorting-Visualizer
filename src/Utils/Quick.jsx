export function quickSort(array, order = "ascending") {
	const steps = [];
	const sortedArray = [...array]; // Copy of the original array

	function partition(arr, low, high) {
		const pivot = arr[high]; // Choose the last element as the pivot
		let i = low - 1;

		for (let j = low; j <= high - 1; j++) {
			steps.push({
				array: [...sortedArray], // Capture the current state of the array
				current: [j, high], // Indices of the elements being compared
				sorted: [],
			});
			if (
				(order === "ascending" && arr[j] < pivot) ||
				(order === "descending" && arr[j] > pivot)
			) {
				i++;
				[arr[i], arr[j]] = [arr[j], arr[i]];
				steps.push({
					array: [...sortedArray], // Capture state after swap
					current: [i, j],
					sorted: [],
				});
			}
		}
		[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

		steps.push({
			array: [...sortedArray], // Capture the state after partition
			current: [i + 1, high],
			sorted: [],
		});

		return i + 1;
	}

	function quickSortRecursive(arr, low, high) {
		if (low < high) {
			const pivotIndex = partition(arr, low, high);

			// Recursively sort the sub-arrays
			quickSortRecursive(arr, low, pivotIndex - 1);
			quickSortRecursive(arr, pivotIndex + 1, high);
		}
	}

	// Initial call to the recursive quicksort function
	quickSortRecursive(sortedArray, 0, sortedArray.length - 1);

	// Ensure all steps have at least some value in the current field
	for (let i = steps.length - 1; i >= 0; i--) {
		if (steps[i].current.length === 0 && steps[i].sorted.length === 0) {
			steps[i].current = [0, array.length - 1];
		}
	}

	for (let i = 0; i < array.length; i++) {
		steps.push({
			array: [...sortedArray],
			current: [],
			sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
		});
	}

	return steps;
}
