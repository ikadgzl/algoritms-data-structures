// Singly Linked List
// Time Complexity
// 	Insertion: O(1) || Removal: if removing beginning or ending O(1) else O(n) || Searching: technically O(n/2) but still O(n)  || Access O(n)
//  Space Complexity O(n)

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}

		this.tail = newNode;
		this.length++;

		return newNode;
	}

	pop() {
		if (!this.head) return null;

		let deletedTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = deletedTail.prev;
			this.tail.next = null;
			deletedTail.prev = null;
		}

		this.length--;

		return deletedTail;
	}

	shift() {
		if (!this.head) return null;

		let deletedHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = deletedHead.next;
			this.head.prev = null;
			deletedHead.next = null;
		}
		this.length--;

		return deletedHead;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return newNode;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		const halfTheList = this.length / 2;

		let current;
		let counter;
		if (index <= halfTheList) {
			counter = 0;
			current = this.head;

			while (counter !== index) {
				current = current.next;
				counter++;
			}
		} else {
			counter = this.length - 1;
			current = this.tail;

			while (counter !== index) {
				current = current.prev;
				counter--;
			}
		}

		return current;
	}

	set(index, value) {
		let updatedNode = this.get(index);

		if (updatedNode) {
			updatedNode.data = value;
			return updatedNode;
		}

		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return this.push(value);
		if (index === 0) return this.unshift(value);

		const newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let nextNode = prevNode.next;

		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode.prev = newNode;
		prevNode.next = newNode;
		this.length++;

		return newNode;
	}

	remove(index = 0) {
		if (index < 0 || index >= this.length) return false;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let deletedNode = this.get(index);
		let prevNode = deletedNode.prev;
		let nextNode = deletedNode.next;

		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		deletedNode.prev = null;
		deletedNode.next = null;

		this.length--;

		return deletedNode;
	}
}
