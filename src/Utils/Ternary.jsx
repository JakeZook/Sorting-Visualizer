export const ternarySearch = (array, target, callback) => {
	return new Promise((resolve) => {
		const steps = [];
		let left = 0;
		let right = array.length - 1;
		let foundIndex = -1;

		const ternarySearchRec = (left, right) => {
			if (left > right) {
				return;
			}

			const third = Math.floor((right - left) / 3);
			const mid1 = left + third;
			const mid2 = right - third;

			callback(mid1); // Call callback with current index for visualization

			if (array[mid1] === target) {
				foundIndex = mid1;
				steps.push({ array: [...array], current: [mid1], found: foundIndex });
				resolve(steps);
				return;
			}
			if (array[mid2] === target) {
				foundIndex = mid2;
				steps.push({ array: [...array], current: [mid2], found: foundIndex });
				resolve(steps);
				return;
			}

			if (target < array[mid1]) {
				steps.push({ array: [...array], current: [mid1], found: foundIndex });
				ternarySearchRec(left, mid1 - 1);
			} else if (target > array[mid2]) {
				steps.push({ array: [...array], current: [mid2], found: foundIndex });
				ternarySearchRec(mid2 + 1, right);
			} else {
				steps.push({
					array: [...array],
					current: [mid1, mid2],
					found: foundIndex,
				});
				ternarySearchRec(mid1 + 1, mid2 - 1);
			}
		};

		ternarySearchRec(left, right);

		if (foundIndex === -1) {
			steps.push({ array: [...array], current: [], found: foundIndex });
			resolve(steps);
		}
	});
};
