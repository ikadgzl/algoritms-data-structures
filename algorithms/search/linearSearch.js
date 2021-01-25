// Linear Search
// Time Complexity = O(n) || Space Complexity O(1)

const linearSearch = (array, item) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === item) return true;
	}

	return false;
};
