export const jumpSearch = (array, target, callback) => {
	return new Promise((resolve) => {
		const steps = [];
		const n = array.length;
		let jumpSize = Math.floor(Math.sqrt(n));
		let prev = 0;
		let foundIndex = -1;

		while (array[Math.min(jumpSize, n) - 1] < target) {
			prev = jumpSize;
			callback(jumpSize);
			jumpSize += Math.floor(Math.sqrt(n));

			if (prev >= n) {
				resolve(steps);
				return;
			}
		}

		for (let i = prev; i < Math.min(jumpSize, n); i++) {
			callback(i);
			if (array[i] === target) {
				foundIndex = i;
				steps.push({ array: [...array], current: [i], found: foundIndex });
				resolve(steps);
				return;
			}
			steps.push({ array: [...array], current: [i], found: foundIndex });
		}
		resolve(steps);
	});
};
