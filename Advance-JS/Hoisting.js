//Hoisting: Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Only variable and function declarations (not initializations) are hoisted.


sayHello(); //works fine
function sayHello() {
    console.log('Hello!');
}

//variable hoisting with `var`
console.log(x); // undefined
var x=5;
console.log(x); // 5

//let and const do not hoist in the same way as `var`
console.log(y); //ReferenceError: Cannot access 'y' before initialization
let y = 10;



