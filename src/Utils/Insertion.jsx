export function insertionSort(arr, order = "ascending") {
	const steps = [];
	const originalArray = [...arr];

	function sort(array) {
		for (let i = 1; i < array.length; i++) {
			let key = array[i];
			let j = i - 1;

			// Use a variable to determine the comparison logic based on the order
			while (
				j >= 0 &&
				((order === "ascending" && array[j] > key) ||
					(order === "descending" && array[j] < key))
			) {
				array[j + 1] = array[j];
				j = j - 1;
				array[j + 1] = key;

				// Capture the state after shifting
				steps.push({
					array: [...array],
					current: [j + 1],
					sorted: [i],
				});
			}
			array[j + 1] = key;

			// Capture the state after inserting the key
			steps.push({
				array: [...array],
				current: [j + 1],
				sorted: [i],
			});
		}
		return array;
	}

	const result = sort(originalArray);

	// Add steps to turn each block green one by one
	for (let i = 0; i < originalArray.length; i++) {
		steps.push({
			array: [...originalArray],
			current: [],
			sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
		});
	}

	return steps;
}
