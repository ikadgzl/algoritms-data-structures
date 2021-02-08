// Max Binary Heap
// Time Complexity
// 	Insertion: O(logn) || Removal: O(log n) || Search: O(n)
//  Space Complexity O(n)

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	bubbleUp() {
		let insertedItemIndex = this.values.length - 1;
		const insertedItem = this.values[insertedItemIndex];

		while (insertedItemIndex > 0) {
			let parentIndex = Math.floor((insertedItemIndex - 1) / 2);
			let parentItem = this.values[parentIndex];

			if (insertedItem <= parentItem) break;

			this.values[parentIndex] = insertedItem;
			this.values[insertedItemIndex] = parentItem;

			insertedItemIndex = parentIndex;
		}
	}

	insert(element) {
		this.values.push(element);

		this.bubbleUp();
	}

	bubbleDown() {
		const length = this.values.length;
		const item = this.values[0];
		let index = 0;

		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];

				if (leftChild > item) {
					swap = leftChildIndex;
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];

				if ((!swap && rightChild > item) || (swap && rightChild > leftChild)) {
					swap = rightChildIndex;
				}
			}

			if (!swap) break;

			this.values[index] = this.values[swap];
			this.values[swap] = item;
			index = swap;
		}
	}

	extractMax() {
		const maxValue = this.values[0];
		const endValue = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = endValue;

			this.bubbleDown();
		}

		return maxValue;
	}
}
