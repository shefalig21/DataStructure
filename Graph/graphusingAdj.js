//for undirected graph using Adjacency list:

function addEdge(adj,i,j)
{
    adj[i].push(j);  //adding vertex j to adjcency list of vertex i
    adj[j].push(i);
}

function displayAdjList(adj)
{
    for(let i=0;i<adj.length;i++) 
    {
        console.log(`${i}:`); //printing vertex
        for(const j of adj[i]) //going through neigbours
        {
            console.log(`${j}`); //printing neighbour
        }
        console.log();
    }
}

const v=4;
const adj=Array.from({length:v},()=>[]);

addEdge(adj,0,1);
addEdge(adj,0,2);
addEdge(adj,1,2);
addEdge(adj,2,3);

console.log("Adjacency List Representation:");
displayAdjList(adj);
