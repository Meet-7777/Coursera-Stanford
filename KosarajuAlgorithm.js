function kosarajuAlgorithm(graph) {
  const visited = new Set();
  const stack = [];

  // Step 1: Perform Depth First Search (DFS) and push nodes to stack in order of finishing times
  function dfs(node) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  // Step 2: Transpose the graph (reverse all edges)
  const reversedGraph = {};

  for (const node in graph) {
    for (const neighbor of graph[node]) {
      if (!reversedGraph[neighbor]) {
        reversedGraph[neighbor] = [];
      }
      reversedGraph[neighbor].push(node);
    }
  }

  // Step 3: Perform Depth First Search (DFS) on the reversed graph using the stack
  const stronglyConnectedComponents = [];
  visited.clear();

  function dfsReverse(node, component) {
    visited.add(node);
    component.push(node);

    for (const neighbor of reversedGraph[node]) {
      if (!visited.has(neighbor)) {
        dfsReverse(neighbor, component);
      }
    }
  }

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      const component = [];
      dfsReverse(node, component);
      stronglyConnectedComponents.push(component);
    }
  }

  return stronglyConnectedComponents;
}

// Example usage
const graph = {
  'A': ['B'],
  'B': ['C', 'E', 'F'],
  'C': ['D', 'G'],
  'D': ['C', 'H'],
  'E': ['A', 'F'],
  'F': ['G'],
  'G': ['F'],
  'H': ['D', 'G']
};

const stronglyConnectedComponents = kosarajuAlgorithm(graph);
console.log(stronglyConnectedComponents);
