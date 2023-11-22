function depthFirstSearch(graph, currentNode, visited) {
    // Mark the current node as visited
    visited.add(currentNode);
    
    // Process the current node
    console.log("Visiting node:", currentNode);
    
    // Get the neighbors of the current node from the graph
    const neighbors = graph[currentNode];
    console.log("Graph: "+graph[currentNode])
    console.log("Neighbors: "+neighbors)
    // Iterate over the neighbors
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      
      // Check if the neighbor has not been visited
      if (!visited.has(neighbor)) {
        // Recursively call depthFirstSearch on the neighbor
        depthFirstSearch(graph, neighbor, visited);
      }
    }
  }
  
  // Example usage:
  const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };
  
  const visited = new Set();
  depthFirstSearch(graph, 'A', visited);
  