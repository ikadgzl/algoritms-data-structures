// Quick Sort
// Time Complexity = O(n * logn) || Space Complexity O(n)

const { swap } = require('../helper/swap');

const pivot = (arr, start = 0, end = arr.length - 1) => {
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);

	return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);

		//left
		quickSort(arr, left, pivotIndex - 1);

		//right
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
};
