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
	{
		name: "Linear",
		desc: "Linear Search is a simple search algorithm that sequentially checks each element in a list until a match is found or the whole list has been searched.",
		time: [
			{
				name: "Best",
				value: "O(1)",
				desc: "When the target element is the first element in the list, Linear Search requires only one comparison.",
			},
			{
				name: "Average",
				value: "O(n)",
				desc: "For most lists, Linear Search requires checking each element in the list until the target element is found.",
			},
			{
				name: "Worst",
				value: "O(n)",
				desc: "When the target element is the last element in the list or not in the list, Linear Search requires checking each element in the list.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Linear Search requires only a constant amount of extra space beyond the input list.",
			},
		],
		steps: [
			"Start from the first element in the list.",
			"Compare the target element with the current element.",
			"Repeat until the target element is found or the end of the list is reached.",
		],
		exampleArray: "[3, 7, 2, 8, 1, 4, 5, 6]",
		example: [
			"Check if 3 is the target element.",
			"Check if 7 is the target element.",
			"Continue until the target element is found or the end of the list is reached.",
		],
	},
	{
		name: "Binary",
		desc: "Binary Search is a search algorithm that finds the position of a target element within a sorted list. It compares the target element with the middle element of the list and eliminates half of the remaining elements at each step.",
		time: [
			{
				name: "Best",
				value: "O(1)",
				desc: "When the target element is the middle element in the list, Binary Search requires only one comparison.",
			},
			{
				name: "Average",
				value: "O(log n)",
				desc: "For most sorted lists, Binary Search requires a logarithmic number of comparisons to find the target element.",
			},
			{
				name: "Worst",
				value: "O(log n)",
				desc: "When the target element is not in the list, Binary Search requires a logarithmic number of comparisons to determine its absence.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Binary Search requires only a constant amount of extra space beyond the input list.",
			},
		],
		steps: [
			"Start with the entire sorted list.",
			"Compare the target element with the middle element of the list.",
			"Eliminate the half of the list that does not contain the target element.",
			"Repeat until the target element is found or the list is empty.",
		],
		exampleArray: "[1, 2, 3, 4, 5, 6, 7, 8]",
		example: [
			"Check if 4 is the target element.",
			"Eliminate the half of the list that does not contain 4: [5, 6, 7, 8].",
			"Check if 4 is the target element.",
			"Continue until the target element is found or the list is empty.",
		],
	},
	{
		name: "Jump",
		desc: "Jump Search is a search algorithm that finds the position of a target element within a sorted list. It jumps ahead by a fixed number of steps and then performs a linear search to find the target element.",
		time: [
			{
				name: "Best",
				value: "O(1)",
				desc: "When the target element is the first element in the list, Jump Search requires only one comparison.",
			},
			{
				name: "Average",
				value: "O(√n)",
				desc: "For most sorted lists, Jump Search requires a square root number of comparisons to find the target element.",
			},
			{
				name: "Worst",
				value: "O(√n)",
				desc: "When the target element is not in the list, Jump Search requires a square root number of comparisons to determine its absence.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Jump Search requires only a constant amount of extra space beyond the input list.",
			},
		],
		steps: [
			"Start with the first element in the list.",
			"Jump ahead by a fixed number of steps.",
			"Perform a linear search to find the target element.",
			"Repeat until the target element is found or the end of the list is reached.",
		],
		exampleArray: "[1, 2, 3, 4, 5, 6, 7, 8]",
		example: [
			"Jump ahead by 2 steps and perform a linear search to find 4.",
			"Continue until the target element is found or the end of the list is reached.",
		],
	},
	{
		name: "Interpolation",
		desc: "Interpolation Search is a search algorithm that finds the position of a target element within a sorted list. It estimates the position of the target element based on the values of the first and last elements in the list.",
		time: [
			{
				name: "Best",
				value: "O(1)",
				desc: "When the target element is the first element in the list, Interpolation Search requires only one comparison.",
			},
			{
				name: "Average",
				value: "O(log log n)",
				desc: "For most sorted lists, Interpolation Search requires a double logarithmic number of comparisons to find the target element.",
			},
			{
				name: "Worst",
				value: "O(n)",
				desc: "When the target element is not in the list, Interpolation Search requires checking each element in the list.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Interpolation Search requires only a constant amount of extra space beyond the input list.",
			},
		],
		steps: [
			"Estimate the position of the target element based on the values of the first and last elements in the list.",
			"Compare the target element with the estimated position.",
			"Eliminate the half of the list that does not contain the target element.",
			"Repeat until the target element is found or the list is empty.",
		],
		exampleArray: "[1, 2, 3, 4, 5, 6, 7, 8]",
		example: [
			"Estimate the position of 4 based on the values of 1 and 8.",
			"Eliminate the half of the list that does not contain 4: [5, 6, 7, 8].",
			"Check if 4 is the target element.",
			"Continue until the target element is found or the list is empty.",
		],
	},
	{
		name: "Ternary",
		desc: "Ternary Search is a search algorithm that finds the position of a target element within a sorted list. It divides the list into three parts and determines which part contains the target element.",
		time: [
			{
				name: "Best",
				value: "O(1)",
				desc: "When the target element is the middle element in the list, Ternary Search requires only one comparison.",
			},
			{
				name: "Average",
				value: "O(log n)",
				desc: "For most sorted lists, Ternary Search requires a logarithmic number of comparisons to find the target element.",
			},
			{
				name: "Worst",
				value: "O(log n)",
				desc: "When the target element is not in the list, Ternary Search requires a logarithmic number of comparisons to determine its absence.",
			},
		],
		space: [
			{
				name: "Auxiliary",
				value: "O(1)",
				desc: "Ternary Search requires only a constant amount of extra space beyond the input list.",
			},
		],
		steps: [
			"Divide the list into three parts.",
			"Compare the target element with the elements at the two dividing points.",
			"Determine which part contains the target element.",
			"Repeat until the target element is found or the list is empty.",
		],
		exampleArray: "[1, 2, 3, 4, 5, 6, 7, 8]",
		example: [
			"Divide the list into three parts: [1, 2], [3, 4], [5, 6, 7, 8].",
			"Determine which part contains 4: [3, 4].",
			"Continue until the target element is found or the list is empty.",
		],
	},
];

export { data };
