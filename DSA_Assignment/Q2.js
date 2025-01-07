function rotateMatrix()
{
    let N=matrix.length;

    //taking tranpose(basically interchanging rows and cloumns)
    for(let i=0;i<N;i++)
    {
        for(let j=i;j<N;j++)
        {
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];     
        }
    }

    //reversing each row
    for(let i=0;i<N;i++)
    {
        matrix[i].reverse();
    }
}

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

rotateMatrix(matrix);
console.log(matrix);