def prims(graph):
    # Initialize the sets of visited and unvisited vertices.
    weight = float('inf')
    visited = set()
    unvisited = set(graph.keys())

    # Initialize the minimum weight edge.
    minEdge = {
        'weight': float('inf'),
        'to': None,
    }

    # Start at an arbitrary vertex.
    currentVertex = unvisited.pop()
    visited.add(currentVertex)

    # While there are still vertices that are not in the spanning tree...
    while len(unvisited) > 0:
        for vertex in unvisited:
            edge = {
                'weight': graph[currentVertex][vertex],
                'to': vertex,
            }
            if edge['weight'] < minEdge['weight']:
                minEdge = edge

        # Add the minimum weight edge to the spanning tree.
        visited.add(minEdge['to'])
        unvisited.remove(minEdge['to'])

        # Update the current vertex for the next iteration.
        currentVertex = minEdge['to']

        # Reset the minEdge for the next iteration.
        minEdge = {
            'weight': float('inf'),
            'to': None,
        }

    return visited


# Initialize the graph.
graph = {
    "A": {"B": 1, "C": 2},
    "B": {"A": 1, "C": 3},
    "C": {"A": 2, "B": 3},
}

# Run the Prim's algorithm.
spanning_tree = prims(graph)

# Print the spanning tree.
print(spanning_tree)
