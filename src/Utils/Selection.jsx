export function selectionSort(array, order = "ascending") {
	const steps = [];
	const originalArray = [...array];

	function sort(arr) {
		for (let i = 0; i < arr.length; i++) {
			let extremeValue = arr[i];
			let indexOfExtremeValue = i;
			steps.push({
				array: [...arr],
				current: [i],
				sorted: [],
			});

			for (let j = i + 1; j < arr.length; j++) {
				const comparison =
					order === "ascending" ? arr[j] < extremeValue : arr[j] > extremeValue;

				if (comparison) {
					extremeValue = arr[j];
					indexOfExtremeValue = j;
				}

				steps.push({
					array: [...arr],
					current: [i, j],
					sorted: [indexOfExtremeValue],
				});
			}

			if (indexOfExtremeValue !== i) {
				let temp = arr[i];
				arr[i] = arr[indexOfExtremeValue];
				arr[indexOfExtremeValue] = temp;
				steps.push({
					array: [...arr],
					current: [i, indexOfExtremeValue],
					sorted: [],
				});
			}
		}
	}

	// Call the sorting function
	sort(originalArray);

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
