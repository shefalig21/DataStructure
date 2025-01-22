//Callback: A callback is a function passed as an argument to another function, to be executed later (usually when a task finishes).


// The function that takes a callback as an argument
function greet(name, callback){
    console.log(`Hello, ${name}!`);
    callback(); // Call the callback function after greeting
}

// The callback function to be executed after the greeting
function sayGoodbye(){
    console.log("Goodbye!");
}

// Calling the greet function and passing sayGoodbye as the callback
greet("Alice", sayGoodbye);


/*callback hell:

Callback hell is a situation in JavaScript where multiple nested callbacks are used, leading to code that is difficult to read, debug, and maintain. 
It often occurs when performing a series of asynchronous tasks that depend on one another.(often called as pyramin of doom)


Problems with Callback Hell
1. Pyramid of Doom:
Code becomes deeply nested and hard to read.
2. Error Handling:
Managing errors for each callback is cumbersome.
3. Scalability:
Adding new steps becomes increasingly complex.
4. Debugging:
Tracking execution flow is challenging

*/




