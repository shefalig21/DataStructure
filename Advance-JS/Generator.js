/*Generator:
A generator is a special type of function in JavaScript that can be paused and resumed, allowing you to generate a sequence of values lazily (i.e., one at a time)

basically:
The * syntax indicates that it's a generator function.
The yield keyword is used to return values from the generator function, and the function's state is saved between each yield.
next() is called to resume execution from where the generator was paused, returning an object with value and done properties.

*/

function *hello (){
    console.log("hello");
    yield 10 ;
    console.log("hii");
    
}
let myhello = hello();
console.log(myhello.next())
console.log(myhello.next())
console.log("");



function* gen()
{
    yield 12;
    yield 45;
    yield 33;    
}

let myGenerator=gen();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
