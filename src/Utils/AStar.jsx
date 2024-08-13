export const aStar = (start, end, barriers, gridSize) => {
	const directions = [
		{ row: -1, col: 0 }, // Up
		{ row: 1, col: 0 }, // Down
		{ row: 0, col: -1 }, // Left
		{ row: 0, col: 1 }, // Right
	];

	const isValid = (row, col) => {
		return (
			row >= 0 &&
			row < gridSize &&
			col >= 0 &&
			col < gridSize &&
			!barriers.has(`${row}-${col}`)
		);
	};

	const heuristic = (row1, col1, row2, col2) => {
		return Math.abs(row1 - row2) + Math.abs(col1 - col2); // Manhattan distance
	};

	const openSet = [];
	const cameFrom = new Map();
	const gScore = Array(gridSize)
		.fill()
		.map(() => Array(gridSize).fill(Infinity));
	const fScore = Array(gridSize)
		.fill()
		.map(() => Array(gridSize).fill(Infinity));

	openSet.push(start);
	gScore[start.row][start.col] = 0;
	fScore[start.row][start.col] = heuristic(
		start.row,
		start.col,
		end.row,
		end.col
	);

	const stepsArray = [];

	while (openSet.length > 0) {
		openSet.sort((a, b) => fScore[a.row][a.col] - fScore[b.row][b.col]);
		const current = openSet.shift();

		if (current.row === end.row && current.col === end.col) {
			const path = [];
			let temp = current;
			while (cameFrom.has(`${temp.row}-${temp.col}`)) {
				path.push(temp);
				temp = cameFrom.get(`${temp.row}-${temp.col}`);
			}
			path.push(start);
			return { path: path.reverse(), steps: stepsArray };
		}

		for (const { row: dRow, col: dCol } of directions) {
			const neighbor = { row: current.row + dRow, col: current.col + dCol };
			if (isValid(neighbor.row, neighbor.col)) {
				const tentativeGScore = gScore[current.row][current.col] + 1;
				if (tentativeGScore < gScore[neighbor.row][neighbor.col]) {
					cameFrom.set(`${neighbor.row}-${neighbor.col}`, current);
					gScore[neighbor.row][neighbor.col] = tentativeGScore;
					fScore[neighbor.row][neighbor.col] =
						tentativeGScore +
						heuristic(neighbor.row, neighbor.col, end.row, end.col);
					if (
						!openSet.some(
							(n) => n.row === neighbor.row && n.col === neighbor.col
						)
					) {
						openSet.push(neighbor);
						stepsArray.push(neighbor);
					}
				}
			}
		}
	}

	return { path: [], steps: stepsArray };
};
