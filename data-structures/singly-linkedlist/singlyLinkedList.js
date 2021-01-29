// Singly Linked List
// Time Complexity
// 	Insertion: O(1) || Removal: if removing beginning O(1) else O(n) || Searching O(n) || Access O(n)
//  Space Complexity O(n)

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(value) {
		const newNode = new Node(value);

		// this.head and this.tail both referring the same Node object, so at else's this.tail.next, actually updates both this.head and this.tail properties' Node, after else, updating this.tail to be the latest Node
		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}

		this.tail = newNode;
		this.length++;

		return newNode;
	}

	pop() {
		if (!this.head) return null;

		let currentNode = this.head;
		let prevNode = this.head;

		while (currentNode.next) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}

		prevNode.next = null;

		this.tail = prevNode;
		this.length--;

		if (!this.length) {
			this.head = null;
			this.tail = null;
		}

		return currentNode;
	}

	shift() {
		if (!this.head) return null;

		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (!this.length) {
			this.tail = null;
		}

		return currentHead;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return newNode;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
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

		prevNode.next = newNode;
		newNode.next = nextNode;
		this.length++;

		return newNode;
	}

	remove(index = 0) {
		if (index < 0 || index >= this.length) return false;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		const deletedNode = prevNode.next;

		prevNode.next = deletedNode.next;
		this.length--;

		return deletedNode;
	}

	reverse() {
		let head = this.head;
		this.head = this.tail;
		this.tail = head;

		let prev = null;
		let next = null;
		while (head !== null) {
			next = head.next;
			head.next = prev;
			prev = head;
			head = next;
		}

		return this;
	}

	print() {
		let arr = [];
		let current = this.head;

		while (current) {
			arr.push(current);
			current = current.next;
		}

		console.log(arr);
	}
}
