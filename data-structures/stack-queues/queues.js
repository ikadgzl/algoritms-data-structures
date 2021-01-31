// Queues
// Time Complexity
// 	Insertion: O(1) || Removal:O(1) || Searching O(n) || Access O(n)
//  Space Complexity O(n)

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor(capacity) {
		this.capacity = capacity || Infinity;
		this.length = 0;
		this.first = null;
		this.last = null;
	}

	enqueue(value) {
		if (this.length < this.capacity) {
			const newNode = new Node(value);

			if (!this.first) {
				this.first = newNode;
			} else {
				this.last.next = newNode;
			}

			this.last = newNode;
			this.length++;

			return newNode;
		}

		return 'Max capacity reached, please remove an item from the queue in order to add new one.';
	}

	dequeue() {
		if (this.length > 0) {
			let tempNode = this.first;

			if (this.first === this.last) {
				this.last = null;
			}

			this.first = this.first.next;
			tempNode.next = null;
			this.length--;

			return tempNode;
		}

		return 'There is no item in the queue to remove!';
	}

	print() {
		let arr = [];
		let current = this.first;

		while (current) {
			arr.push(current);
			current = current.next;
		}

		console.log(arr);
	}

	peek() {
		return this.length;
	}

	size() {
		return this.size;
	}
}
