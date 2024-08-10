export const linearSearch = (array, target, callback) => {
	return new Promise((resolve) => {
		const steps = [];
		let foundIndex = -1;

		for (let i = 0; i < array.length; i++) {
			callback(i);

			// Update steps with the current state
			if (array[i] === target) {
				foundIndex = i; // Update foundIndex when target is found
				steps.push({ array: [...array], current: [i], found: foundIndex });
				resolve(steps); // Resolve with the steps including the found index
				return;
			}

			// Continue adding steps with the current index
			steps.push({ array: [...array], current: [i], found: foundIndex });
		}

		// If target is not found, ensure `found` remains -1
		resolve(steps);
	});
};
