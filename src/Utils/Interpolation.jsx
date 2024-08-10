export const interpolationSearch = (array, target, callback) => {
	return new Promise((resolve) => {
		const steps = [];
		let low = 0;
		let high = array.length - 1;
		let foundIndex = -1;

		while (low <= high && target >= array[low] && target <= array[high]) {
			const pos =
				low +
				Math.floor(
					((target - array[low]) / (array[high] - array[low])) * (high - low)
				);

			callback(pos);

			if (array[pos] === target) {
				foundIndex = pos;
				steps.push({ array: [...array], current: [pos], found: foundIndex });
				resolve(steps);
				return;
			} else if (array[pos] < target) {
				low = pos + 1;
			} else {
				high = pos - 1;
			}

			steps.push({ array: [...array], current: [pos], found: foundIndex });
		}
		resolve(steps);
	});
};
