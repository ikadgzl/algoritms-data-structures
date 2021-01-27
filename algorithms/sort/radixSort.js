// Radix Sort
// Time Complexity = O(n * k) || Space Complexity O(n + k)

const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
	if (num === 0) {
		return 1;
	}

	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
	let maxDigit = 0;

	for (let i = 0; i < nums.length; i++) {
		maxDigit = Math.max(maxDigit, digitCount(nums[i]));
	}

	return maxDigit;
};

const radixSort = (nums) => {
	let maxDigit = mostDigits(nums);

	for (let i = 0; i < maxDigit; i++) {
		let digitBucket = Array.from({ length: 10 }, () => []);

		for (let j = 0; j < nums.length; j++) {
			let digit = getDigit(nums[j], i);
			digitBucket[digit].push(nums[j]);
		}

		nums = [].concat(...digitBucket);
	}

	return nums;
};
