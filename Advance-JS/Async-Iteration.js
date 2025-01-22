/*Async Iteration: Async iteration allows you to iterate over asynchronous data sources, like streams, or values that are not immediately available, using for-await-of loops. 
It's a way of iterating over async data (like promises) without blocking the execution of the program.

for-await-of loop:
The for-await-of loop is used to iterate over asynchronous values (Promises).
It automatically waits for each Promise to resolve before moving to the next one.
Each resolved value (item) is logged in the console.

Basically:

Promise.resolve(): This is used to create a resolved Promise. Each item in the data array is a Promise that resolves with a value like 'Item 1', 'Item 2', and 'Item 3'.

Promise.resolve('Item 1') creates a Promise that resolves to 'Item 1'.
Promise.resolve('Item 2') creates a Promise that resolves to 'Item 2', and so on.
for-await-of: This loop will iterate over each Promise in the data array. It will wait (await) for each Promise to resolve and then proceed with the next iteration.
*/


async function fetchData()
{
    //simulating asynchronous data(like fetching from an API)
    const data=[
        Promise.resolve("Item 1"),
        Promise.resolve("Item 2"),
        Promise.resolve("Item 3"),
    ];

    for await(const item of data)
    {
        console.log(item);
    }
}

//using for-await-of to iterate over the async data
fetchData();

