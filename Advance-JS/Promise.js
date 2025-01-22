//Promise:
//Earlier libraries of promises like Q or bluebird were used.


const promise1=new Promise(function(resolve,reject){  //creation of promise
    //Do any async task like DB calls,network calls etc

    setTimeout(function(){
        console.log("Async is completed");
        resolve();   //calling the resolve method,then only .then() will work
    },1000);
})

//promise completed will always be printed later on,first the async task will be completed and then resolve method will be called and print then.

//consuming promise
promise1.then(function(){
    console.log("Promise completed");
}) 


//another way to use promise: without storing it into a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000);
}).then(function(){  //directly used .then() becuase in this case promise is not stored in variable
    console.log("async task 2 consumed");
})


//resolve me data pass karenge:

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "Shefali", email: "shefali@gmail.com"});
    },1000);
})

promise3.then(function(user){   //function ke andar object ka naam daalenge,ese hum resolve ke data ko access kar payenge.
    console.log(user);  //we take user as object name
})

//another way for this:
// let prom=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success)
//     {
//         console.log("pass");
//         resolve();
//     }

//     else{
//         console.log("Failed");
//     }
// });

// prom.then((result)=>{
//     console.log("Primse compelted");
// })

//using both try and catch in promise:

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({name: "Shefu", email: "shefu@gmail.com"});
        }
        else{
            reject("ERROR: Something went wrong");
        }
    },2000);
})

promise4.then(function(user){  //we can also use arrow function 
    console.log(user);
}).catch(function(error){
    console.log(error);
})

//the above example using arrow function:
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({name: "John Doe"});
        }else{
            reject("ERROR: Something went wrongggg");
        }
    },1000);
})

promiseFour.then(user=>{
    console.log(user);
}).catch(error=>{
    console.log(error);
})


/*Promise Chaining: 
(Promises can be chained to perform sequential asynchronous operations)
Promise chaining allows you to execute a series of asynchronous operations in sequence. 
It is a powerful feature of JavaScript promises that helps you manage multiple operations, making your code more readable and easier to maintain.

1. Allows multiple asynchronous operations to run in sequence.
2. Reduces callback hell by eliminating deeply nested functions.
3. Each then() returns a new promise, allowing further chaining.
4. Error handling is easier with a single .catch() for the entire chain.

*/

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username: "Shefali", password: 123});
        }
        else{
            reject("Error Error");
        }
    },1000);
})

promise5.then((user)=>{
    console.log(user); //Logs {username: "Shefali", password: 123}
    return user.username;
}).then((username)=>{ //is vale .then ke andar,pichle then ka data return ayega
    console.log(username); //Logs "Shefali"
}).catch((error)=>{
    console.log(error); //Logs "Error Error" if error is true
})



// can also be done like this: improves readability

/*
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username: "Shefali", password: 123});
        }
        else{
            reject("Error Error");
        }
    },1000);
})

promise5.
then((user)=>{
    console.log(user); 
    return user.username;
}).
then((username)=>{ 
    console.log(username);
}).
catch((error)=>{
    console.log(error); 
})

*/



//finally:Called after the promise is settled (either fulfilled or rejected):

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let success=true;
        if(success)
        {
            resolve({name: "John Doe",role: "Admin"});
        }
        else{
            reject("ERROR");
        }
    },2000);
})

promiseFive
.then((user)=>{
    console.log(user);
    return user.role;
})
.then((role)=>{
    console.log(role);
})
.catch((error)=>{
    console.log("error");
})
.finally(()=>{
    console.log("either promise is resolved or rejected.");
})


/*using Async-await:
(async awit directly doesn't handle error,but we can use try catch in async)
async: A keyword used to declare an asynchronous function. An async function always returns a Promise, and its execution pauses at each await keyword until the awaited Promise resolves or rejects.

await: A keyword used inside an async function to pause the execution of the function until a Promise is resolved or rejected. It allows you to write asynchronous code in a synchronous-like manner.

Key Features of async and await:
await works only inside async functions.
async functions make asynchronous code more readable and easier to manage compared to chaining .then() and .catch().
If the await keyword is used with a Promise that resolves, the resolved value is returned.
If the Promise rejects, it throws an error that can be caught using try...catch.
*/


const promise6=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username: "javascript", password: 123});
        }
        else{
            reject("Error: JS went wrong ");
        }
    },1000);
})

async function consumePromise6()
{
    try{
        const response=await promise6;
        console.log(response);
 }
    catch{
        console.log(error);
    }  
}

consumePromise6();


async function getAllUsers()
{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json(); //string me hain data usse json me convert karenge(time lagta hain json me convert hone me)
        console.log(data);
    }
    catch(error)
    {
        console.log("E:",error);
    }
}

getAllUsers();

//now,doing this code through try and catch;

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{ //to handle resposne we used another then
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



//error 404 hume reject ya response kispe milta hain(asked in interview)
//Resonse me milta hain.





