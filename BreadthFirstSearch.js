function breadthFirstSearch(graph, startNode, targetNode) {
    // Create a queue to store the nodes to be visited
    const queue = [];
    
    // Create a Set to keep track of visited nodes
    const visited = new Set();
    
    // Enqueue the startNode
    queue.push(startNode);
    visited.add(startNode);
    
    // Iterate until the queue is empty
    while (queue.length > 0) {
      // Dequeue the node from the front of the queue
      const currentNode = queue.shift();
      
      // Check if the current node is the target node
      if (currentNode === targetNode) {
        console.log("Target node found!");
        return true;
      }
      
      // Get the neighbors of the current node from the graph
      const neighbors = graph[currentNode];
      
      // Iterate over the neighbors
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        
        // Check if the neighbor has not been visited
        if (!visited.has(neighbor)) {
          // Enqueue the neighbor
          queue.push(neighbor);
          
          // Mark the neighbor as visited
          visited.add(neighbor);
        }
      }
    }
    
    console.log("Target node not found!");
    return false;
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
  
  breadthFirstSearch(graph, 'A', 'F');
  