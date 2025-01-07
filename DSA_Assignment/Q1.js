function dijkstra(graph, source) {
    const distances = {};
    const visited = new Set();
    const nodes = Object.keys(graph);

    for (let node of nodes) {
        distances[node] = Infinity;
    }
    distances[source] = 0;

    while (visited.size !== nodes.length) {
        let nearestNode = null;

        for (let node of nodes) {
            if (!visited.has(node)) {
                if (nearestNode === null || distances[node] < distances[nearestNode]) {
                    nearestNode = node;
                }
            }
        }

        if (nearestNode === null) break;

        visited.add(nearestNode);
        const neighbors = graph[nearestNode];

        for (let neighbor in neighbors) {
            let distance = distances[nearestNode] + neighbors[neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
    }

    return distances;
}

const graph = {
    1: { 2: 4, 3: 2 },
    2: { 4: 7, 5: 1 },
    3: { 6: 5 },
    5: { 6: 3 }
};
const source = 1;
const shortestPaths = dijkstra(graph, source);

console.log("Shortest Path from Source", shortestPaths);

