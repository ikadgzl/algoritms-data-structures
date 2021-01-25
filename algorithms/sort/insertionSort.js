// Insertion Sort
// Time Complexity = O(n^2) || Space Complexity O(1)

const data = [5, 2, 4, 6, 1, 3];
const insertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let currentValue = data[i];

		let j = i - 1;
		while (j > -1 && array[j] > currentValue) {
			array[j + 1] = array[j];
			j--;
		}

		array[j + 1] = currentValue;
	}

	return array;
};
