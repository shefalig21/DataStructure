//directed graph using adjacency list
class Graph{
    constructor(){
        this.adjacencyList={}; 
    }

    //to add vertex to graph
addVertex(vertex)
{
    if(!this.adjacencyList[vertex])
    {
        this.adjacencyList[vertex]=[];
    }
}

addEdge(vertex1,vertex2)
{
    //add vertex if it doesn't exist
    if(!this.adjacencyList[vertex1])
    {
        this.addVertex(vertex1);
    }
    if(!this.adjacencyList[vertex2])
    {
        this.addVertex(vertex2);
    }

    //adding edge
    this.adjacencyList[vertex1].push(vertex2);
}



}

const graph=new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("C","A");

console.log("Adjacency List Representation:");
console.log(graph.adjacencyList);