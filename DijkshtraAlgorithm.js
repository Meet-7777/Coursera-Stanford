const fs = require('fs');
function buildGraphFromFile(dijkstraData) {
  const data = fs.readFileSync(dijkstraData.txt, 'utf8');
  const lines = data.trim().split('\n');

  const graph = {};

  for (const line of lines) {
    const [source, ...destinations] = line.trim().split(' ');

    graph[source] = {};

    for (const destination of destinations) {
      const [node, weight] = destination.split(',');

      graph[source][node] = parseInt(weight);
    }
  }

  return graph;
}

const filename = 'graph.txt';
function dijkstraAlgorithm(graph, startNode) {
  const distances = {}; // Stores the shortest distances from the startNode to all other nodes
  const visited = new Set(); // Tracks the visited nodes
  const queue = []; // Priority queue to store the nodes based on their tentative distances

  // Step 1: Initialize distances and queue
  for (const node in graph) {
    distances[node] = Infinity; // Set initial distance to Infinity for all nodes
  }
  distances[startNode] = 0; // Set distance to 0 for the startNode
  queue.push({ node: startNode, distance: 0 }); // Add startNode to the queue

  while (queue.length > 0) {
    // Step 2: Extract the node with the minimum distance from the queue
    queue.sort((a, b) => a.distance - b.distance);
    const { node, distance } = queue.shift();

    if (visited.has(node)) {
      continue; // Skip if the node has already been visited
    }

    visited.add(node);

    // Step 3: Update distances and queue for the neighboring nodes
    for (const neighbor in graph[node]) {
      const newDistance = distance + graph[node][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        queue.push({ node: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}



  // const graph = {
  //   A: { B: 5, C: 2 },
  //   B: { A: 5, D: 1 },
  //   C: { A: 2, D: 6 },
  //   D: { B: 1, C: 6 }
  // };
  
  const startNode = 'A';
  const distances = dijkstraAlgorithm(graph, startNode);
  console.log(distances);