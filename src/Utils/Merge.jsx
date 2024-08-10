export function mergeSort(array, order = "ascending") {
	const steps = [];
	const sortedArray = [...array]; // Copy of the original array

	function merge(left, right, leftStart, rightStart) {
		let resultArray = [];
		let leftIndex = 0;
		let rightIndex = 0;

		while (leftIndex < left.length && rightIndex < right.length) {
			steps.push({
				array: [...sortedArray], // Capture the current state of the array
				current: [leftStart + leftIndex, rightStart + rightIndex],
				sorted: [],
			});

			if (
				(order === "ascending" && left[leftIndex] < right[rightIndex]) ||
				(order === "descending" && left[leftIndex] > right[rightIndex])
			) {
				resultArray.push(left[leftIndex]);
				leftIndex++;
			} else {
				resultArray.push(right[rightIndex]);
				rightIndex++;
			}
		}

		// Concatenate the remaining elements
		resultArray = resultArray
			.concat(left.slice(leftIndex))
			.concat(right.slice(rightIndex));

		// Update sortedArray with the merged result
		for (let i = 0; i < resultArray.length; i++) {
			sortedArray[leftStart + i] = resultArray[i];
		}

		// Capture the state after merging
		steps.push({
			array: [...sortedArray], // Capture the current state of the array
			current: [], // No elements are being compared
			sorted: [], // Update the sorted field if needed
		});

		return resultArray;
	}

	function mergeSortRecursive(
		array,
		leftStart = 0,
		rightEnd = array.length - 1
	) {
		if (leftStart >= rightEnd) {
			return array.slice(leftStart, rightEnd + 1);
		}

		const middle = Math.floor((leftStart + rightEnd) / 2);
		const left = mergeSortRecursive(array, leftStart, middle);
		const right = mergeSortRecursive(array, middle + 1, rightEnd);

		// Capture the state before merging
		steps.push({
			array: [...sortedArray], // Capture the current state of the array
			current: [leftStart, rightEnd],
			sorted: [], // Update the sorted field if needed
		});

		return merge(left, right, leftStart, middle + 1);
	}

	const results = mergeSortRecursive(array);

	// Ensure all steps have at least some value in current field
	for (let i = steps.length - 1; i >= 0; i--) {
		if (steps[i].current.length === 0 && steps[i].sorted.length === 0) {
			steps[i].current = [0, array.length - 1];
		}
	}

	for (let i = 0; i < array.length; i++) {
		steps.push({
			array: [...results],
			current: [],
			sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
		});
	}

	return steps;
}
