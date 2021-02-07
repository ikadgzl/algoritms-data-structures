// Singly Linked List
// Time Complexity
// 	Insertion: O(logn) || Removal: O(log n)
//  Space Complexity O(n)

class Node {
	constructor(value) {
		// this.count = 1;
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.length = 0;
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		let currentNode = this.root;
		this.length++;

		if (!this.root) {
			this.root = newNode;
			return newNode;
		} else {
			while (true) {
				// We can keep count how many times a number added to the tree or just return null;
				// if (newNode.value === currentNode.value) {
				// 	currentNode.count++;
				// 	return currentNode;
				// }
				if (newNode.value === currentNode.value) return null;
				if (newNode.value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return newNode;
					} else {
						currentNode = currentNode.left;
					}
				} else if (newNode.value > currentNode.value) {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return newNode;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}

	find(searchValue) {
		if (!this.root) {
			return false;
		}

		let currentNode = this.root;
		let found = false;
		while (currentNode && !found) {
			if (searchValue < currentNode.value) {
				currentNode = currentNode.left;
			} else if (searchValue > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				found = true;
			}
		}

		return found && currentNode;
	}

	BFS() {
		let node = this.root,
			data = [],
			queue = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}

	DFSPreOrder() {
		let data = [];

		const traverse = (node) => {
			data.push(node);

			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return data;
	}

	DFSPostOrder() {
		let data = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);

			data.push(node);
		};

		traverse(this.root);

		return data;
	}

	DFSInOrder() {
		let data = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);
			data.push(node);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return data;
	}
}

const x = new BinarySearchTree();

x.insert(1);
x.insert(7);
x.insert(-3);
x.insert(6);
x.insert(4);
x.insert(9);
x.insert(15);
x.insert(2);
