class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });

    delete this.adjacencyList[vertex];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v2 !== v);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v1 !== v);
  }

  // in depthFirstRecursive, because of we 'pop' from the array,
  // it pops out the last element, that's why the differences between recursive and iterator, but still depth first.
  depthFirst(startingVertex) {
    const stack = [startingVertex];
    const result = [];
    const visited = {};

    visited[startingVertex] = true;

    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }

    return result;
  }

  // depthFirstRecursion(startingVertex) {
  //   const adjacencyList = this.adjacencyList;
  //   const result = [];
  //   const visited = {};

  //   (function dfs(vertex) {
  //     if (!vertex) return null;

  //     visited[vertex] = true;
  //     result.push(vertex);

  //     adjacencyList[vertex].forEach((v) => {
  //       if (!visited[v]) {
  //         return dfs(v);
  //       }
  //     });
  //   })(startingVertex);

  //   return result;
  // }

  breadthFirst(startingVertex) {
    const queue = [startingVertex];
    const result = [];
    const visited = {};

    visited[startingVertex] = true;

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('Hong Kong');
g.addVertex('Tokyo');
g.addVertex('Los Angeles');
g.addVertex('Istanbul');
g.addVertex('Berlin');

g.addEdge('Hong Kong', 'Berlin');
g.addEdge('Hong Kong', 'Istanbul');
g.addEdge('Istanbul', 'Tokyo');
g.addEdge('Istanbul', 'Berlin');
g.addEdge('Tokyo', 'Berlin');
g.addEdge('Los Angeles', 'Istanbul');
g.addEdge('Los Angeles', 'Tokyo');
g.addEdge('Los Angeles', 'Berlin');

console.log(g);

const x = g.depthFirst('Berlin');

console.log(x);

const y = g.breadthFirst('Berlin');

console.log(y);
