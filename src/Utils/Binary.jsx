export const binarySearch = (array, target, callback) => {
	return new Promise((resolve) => {
		const steps = [];
		let left = 0;
		let right = array.length - 1;
		let foundIndex = -1;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			callback(mid);

			if (array[mid] === target) {
				foundIndex = mid;
				steps.push({ array: [...array], current: [mid], found: foundIndex });
				resolve(steps);
				return;
			}

			steps.push({ array: [...array], current: [mid], found: foundIndex });

			if (array[mid] < target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}

		steps.push({ array: [...array], current: [], found: -1 });
		resolve(steps);
		console.log(steps);
	});
};
