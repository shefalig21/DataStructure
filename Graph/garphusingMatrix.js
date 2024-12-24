//for undirected graph using adjacency matrix
function addEdge(mat,i,j)
{
    mat[i][j]=1;
    mat[j][i]=1;
}
function displayMatrix(mat)
{//displaying adjacency matrix
    for(let row of mat)
    {
        console.log(row.join(""));
    }
}

const V=4;

let mat=Array.from({length:V},()=>Array(V).fill(0)); //Creating a V x V matrix initialized to 0

addEdge(mat,0,1);  //add an edge between 0 and 1
addEdge(mat,0,2);
addEdge(mat,1,2);
addEdge(mat,2,3);

console.log("Adjcency matrix:")
displayMatrix(mat);

