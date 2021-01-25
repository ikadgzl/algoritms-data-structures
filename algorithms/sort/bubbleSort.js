// Bubble Sort
// Time Complexity = O(n^2) || Space Complexity O(1)

const bubbleSort = (array) => {
	let doneSwapping;

	for (let i = array.length; i > 0; i--) {
		doneSwapping = true;

		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				doneSwapping = false;

				let temp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = temp;
			}
		}
	}

	return array;
};
