// Binary Search
// Time Complexity = O(log(n)) || Space Complexity O(1)

const binarySearch = (sortedArray, num) => {
	let start = 0;
	let end = sortedArray.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (sortedArray[mid] === num) {
			return true;
		} else if (sortedArray[mid] > num) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}

	return false;
};
