// Selection Sort
// Time Complexity = O(n^2) || Space Complexity O(1)

const data = [1, 6, 31, 5, 3, 64, 75, 4, 8];
const selectionSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[lowest]) {
				lowest = j;
			}
		}

		if (i !== lowest) {
			let temp = array[i];
			array[i] = array[lowest];
			array[lowest] = temp;
		}
	}

	return array;
};
