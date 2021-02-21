class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let insertedItemIndex = this.values.length - 1;
    const insertedItem = this.values[insertedItemIndex];

    while (insertedItemIndex > 0) {
      let parentIndex = Math.floor((insertedItemIndex - 1) / 2);
      let parentItem = this.values[parentIndex];

      if (insertedItem.priority >= parentItem.priority) break;

      this.values[parentIndex] = insertedItem;
      this.values[insertedItemIndex] = parentItem;

      insertedItemIndex = parentIndex;
    }
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);

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

        if (leftChild.priority < item.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (!swap && rightChild.priority < item.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = item;
      index = swap;
    }
  }

  dequeue() {
    const maxValue = this.values[0];
    const endValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = endValue;

      this.bubbleDown();
    }

    return maxValue;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();

    const distances = {};
    const previous = {};

    let path = [];

    // build the initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // as long as there's neighbour to visit
    while (nodes.values.length) {
      let smallestNode = nodes.dequeue().value;

      if (smallestNode === finish) {
        while (previous[smallestNode]) {
          path.push(smallestNode);
          smallestNode = previous[smallestNode];
        }

        break;
      }

      if (smallestNode || distances[smallestNode] !== Infinity) {
        for (const neighbour in this.adjacencyList[smallestNode]) {
          let nextNode = this.adjacencyList[smallestNode][neighbour];

          // calculate distances to neighbouring node
          let candidate = distances[smallestNode] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            distances[nextNeighbour] = candidate;
            previous[nextNeighbour] = smallestNode;
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }

    path = [...path, start].reverse();
    return path;
  }
}
