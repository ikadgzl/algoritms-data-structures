// Time Complexity = (string m, searchTerm n) => O(n*(m-n+1)) || Space Complexity O(1)

let counter = 0;

const naiveSearch = (string, searchTerm) => {
	for (let i = 0; i < string.length - searchTerm.length + 1; i++) {
		for (let j = 0; j < searchTerm.length; j++) {
			if (searchTerm[j] !== string[j + i]) break;

			if (j === searchTerm.length - 1) {
				counter++;
			}
		}
	}

	return counter ? counter : -1;
};
