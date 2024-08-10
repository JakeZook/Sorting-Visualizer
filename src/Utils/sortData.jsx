const data = [
	{
		name: "Bubble",
		desc: "Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing adjacent elements, and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
		time: [
			{
				name: "Best",
				value: "O(n)",
				desc: "When the array is already sorted, Bubble Sort only requires one pass through the array to confirm that no swaps are needed.",
			},
			{
				name: "Average",
				value: "O(n²)",
				desc: "For most arrays, Bubble Sort requires multiple passes, with each pass potentially involving comparisons and swaps.",
			},
			{
				name: "Worst",
				value: "O(n²)",
				desc: "When the array is sorted in reverse order, Bubble Sort requires the maximum number of comparisons and swaps.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Bubble Sort is an in-place sorting algorithm, meaning it requires only a constant amount of extra space beyond the input array.",
			},
		],
		steps: [
			"Start with the first element of the array.",
			"Compare the current element with the next one.",
			"If the current element is greater than the next element, swap them.",
			"Move to the next element and repeat the comparison and swap if needed.",
			"Once you reach the end of the array, the largest unsorted element is guaranteed to be in its correct position.",
			"Repeat the process for the rest of the array (ignoring the last sorted elements) until no more swaps are needed.",
		],
		exampleArray: "[1, 5, 4, 2, 8]",
		example: [
			"Compare 5 and 1 → Swap to get [1, 5, 4, 2, 8]",
			"Compare 5 and 4 → Swap to get [1, 4, 5, 2, 8]",
			"Compare 5 and 2 → Swap to get [1, 4, 2, 5, 8]",
			"Compare 5 and 8 → No swap needed",
			"Move to the next element",
			"Continue until no swaps are needed, which indicates that the array is sorted.",
		],
	},
	{
		name: "Merge",
		desc: "Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, recursively sorts the halves, and then merges them back together.",
		time: [
			{
				name: "Best",
				value: "O(n log n)",
				desc: "Merge Sort consistently performs well, with a time complexity of O(n log n) for all cases.",
			},
			{
				name: "Average",
				value: "O(n log n)",
				desc: "Merge Sort maintains its O(n log n) time complexity for most arrays.",
			},
			{
				name: "Worst",
				value: "O(n log n)",
				desc: "Even in the worst-case scenario, Merge Sort's time complexity remains O(n log n).",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(n)",
				desc: "Merge Sort requires additional space to store the temporary arrays during the merging process.",
			},
		],
		steps: [
			"Divide the array into two halves.",
			"Recursively sort the two halves.",
			"Merge the sorted halves back together.",
		],
		exampleArray: "[3, 7, 2, 8, 1, 4, 5, 6]",
		example: [
			"Divide the array into [3, 7, 2, 8] and [1, 4, 5, 6].",
			"Recursively sort the two halves: [2, 3, 7, 8] and [1, 4, 5, 6].",
			"Merge the two sorted halves: [1, 2, 3, 4, 5, 6, 7, 8].",
		],
	},
	{
		name: "Quick",
		desc: "Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot.",
		time: [
			{
				name: "Best",
				value: "O(n log n)",
				desc: "Quick Sort performs well with a time complexity of O(n log n) for most arrays.",
			},
			{
				name: "Average",
				value: "O(n log n)",
				desc: "For most arrays, Quick Sort maintains its O(n log n) time complexity.",
			},
			{
				name: "Worst",
				value: "O(n²)",
				desc: "In the worst-case scenario, Quick Sort's time complexity degrades to O(n²).",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(log n)",
				desc: "Quick Sort requires additional space for the recursive calls and the stack.",
			},
		],
		steps: [
			"Select a 'pivot' element from the array.",
			"Partition the other elements into two sub-arrays according to whether they are less than or greater than the pivot.",
			"Recursively sort the two sub-arrays.",
		],
		exampleArray: "[3, 7, 2, 8, 1, 4, 5, 6]",
		example: [
			"Select 3 as the pivot.",
			"Partition the array into [2, 1] and [7, 8, 4, 5, 6].",
			"Recursively sort the two sub-arrays: [1, 2] and [4, 5, 6, 7, 8].",
		],
	},
	{
		name: "Selection",
		desc: "Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted.",
		time: [
			{
				name: "Best",
				value: "O(n²)",
				desc: "Selection Sort has a time complexity of O(n²) for all cases.",
			},
			{
				name: "Average",
				value: "O(n²)",
				desc: "For most arrays, Selection Sort requires multiple passes, with each pass potentially involving comparisons and swaps.",
			},
			{
				name: "Worst",
				value: "O(n²)",
				desc: "Selection Sort's time complexity remains O(n²) even in the worst-case scenario.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Selection Sort is an in-place sorting algorithm, meaning it requires only a constant amount of extra space beyond the input array.",
			},
		],
		steps: [
			"Find the smallest element in the array.",
			"Swap it with the first element.",
			"Repeat the process for the remaining elements, excluding the already sorted ones.",
		],
		exampleArray: "[3, 7, 2, 8, 1, 4, 5, 6]",
		example: [
			"Find the smallest element (1) and swap it with 3: [1, 7, 2, 8, 3, 4, 5, 6].",
			"Find the smallest element (2) and swap it with 7: [1, 2, 7, 8, 3, 4, 5, 6].",
			"Continue until all elements are sorted.",
		],
	},
	{
		name: "Insertion",
		desc: "Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It takes each element from the input array and inserts it into its correct position in the sorted array.",
		time: [
			{
				name: "Best",
				value: "O(n)",
				desc: "When the array is already sorted, Insertion Sort only requires one pass through the array to confirm that no insertions are needed.",
			},
			{
				name: "Average",
				value: "O(n²)",
				desc: "For most arrays, Insertion Sort requires multiple passes, with each pass potentially involving comparisons and insertions.",
			},
			{
				name: "Worst",
				value: "O(n²)",
				desc: "When the array is sorted in reverse order, Insertion Sort requires the maximum number of comparisons and insertions.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Insertion Sort is an in-place sorting algorithm, meaning it requires only a constant amount of extra space beyond the input array.",
			},
		],
		steps: [
			"Start with the second element of the array.",
			"Compare the current element with the elements to its left.",
			"Shift the elements to the right until you find the correct position for the current element.",
			"Insert the current element into its correct position.",
			"Repeat the process for the rest of the array.",
		],
		exampleArray: "[3, 7, 2, 8, 1, 4, 5, 6]",
		example: [
			"Insert 7 into the sorted array [3]: [3, 7].",
			"Insert 2 into the sorted array [3, 7]: [2, 3, 7].",
			"Insert 8 into the sorted array [2, 3, 7]: [2, 3, 7, 8].",
			"Continue until all elements are sorted.",
		],
	},
];

export { data };
