/*async-await:
async Keyword:
The async keyword is used to define a function that always returns a Promise.
Inside an async function, you can use the await keyword to wait for a Promise to resolve.

await Keyword:
The await keyword pauses the execution of an async function until a Promise resolves or rejects.
It can only be used inside async functions.
*/

//basic usage:
async function fetchData()
{
    const myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
        },2000);
    });


const result=await myPromise; //waits until the promise resolves
console.log(result); //Data fetched
}

fetchData();

//or (another way to do this)

async function Fetch()
{
    const promise1=new Promise((resolve,reject)=>{
        setTimeout(function(){
            let success=true;
            if(success){
                resolve({name: "Shefali"});
            }
            
        },1000);

        });

        const response=await promise1;
        console.log(response);
}

Fetch();


//or (another way to do this: make promise outside function and make function of async and use it)

const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let success=true;
        if(success){
            resolve({name: "John"});
        }
        
    },1000);

    })

async function fetch()
{
    const response=await promiseOne;
    console.log(response);
}
fetch();

//Handling errors: using try-catch block: When using await, errors thrown by the promise can be caught with try...catch.

async function fetchDatawithError()
{
    const promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error fetching data");
        },2000);
    });

    try{
        const result=await promise2; //waits until the promise resolves/rejects
        console.log(result);
    }
    catch(error)
    {
        console.log(error); //error fetching data
    }
}

fetchDatawithError();

//OR (another way to do this using try catch)

const promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({rollNo: 123});
        }
        else{
            reject("ERROR : Something went wrong");
        }
    },3000);
})

async function fetchPromise()
{
    try{
        const response=await promiseTwo;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
   
}

fetchPromise();

//Using await with fetch: A common use case for async/await is making HTTP requests.

async function getUserData()
{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json(); //wait for the response to be converted to JSON
        console.log(data);
    }
    catch(error)
    {
        console.log("Error fetching user data:",error);
        
    }
}

getUserData();
