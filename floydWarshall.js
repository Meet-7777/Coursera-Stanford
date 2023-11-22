function floydWarshall(graph) {
    const n = graph.length;
    const distances = Array(n).fill(null).map(() => Array(n).fill(Infinity));
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] !== Infinity) {
          distances[i][j] = graph[i][j];
        }
      }
    }
  
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          distances[i][j] = Math.min(distances[i][j], distances[i][k] + distances[k][j]);
        }
      }
    }
  
    return distances;
  }
  
  const graph = [
    [0, Infinity, 4, Infinity],
    [Infinity, 0, 3, 2],
    [Infinity, Infinity, 0, 1],
    [Infinity, Infinity, Infinity, 0],
  ];
  
  const distances = floydWarshall(graph);
  
  console.log(distances);
  