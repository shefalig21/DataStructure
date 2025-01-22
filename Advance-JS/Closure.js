//Closure: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.

//basic example:
function x()
{
    let a=5;
    function y()
    {
        console.log(a);
    }
    y();

}

x();


function initName()
{
    var name="Shefali";
    function displayName() //displayName() is the inner function, that forms a closure
    {
        console.log(name);//use variable declared in the parent function
    }
    displayName();
}

initName();

//basically function displayName() was bind to variables of initName().That means it form a closure and have access to its parents lexical scope.


//we can assign function to a variable or pass function as argument to naother function,we can even return a function.

//Case-1: when we return function
function x()
{
    var a=7;
    function y(){
        console.log(a);
    }
    return y; //here we have returned the function y
}
var z=x(); //so when x is invoked,it returns y
console.log(z);//it gives the function y,and x is vanished

z();//isme function y hai,toh yeh a ki kya value print karega kyuki a global scope me nhi hai.  7 bocz closure comes into picture .functions when they are retuend from another function they still maintain their lexical scope.(even though x doesnt exist now,but y still rembers its lexiical scope,where it came from )

//so,basically in z the function along with closure i.e function with its lexical scope was returned in z.


//another way to do same:

// function x(){
//     var a7;
//     return function y(){  //it is same as previous but another way to return function,but both  are same
//         console.log(a);
//     }
// }
// var z=x();
// console.log(z);

// z();


//Case-2: when value of a is modified: function remembers the reference to variable a not the value of a.(so the modified value will be returened)

function x1(){
    var a=7;
    function y1(){
        console.log(a);
    }
    a=100;
    return y1;
}

var z1=x1();
console.log(z1);

z1(); //100 (basically the 7 doesn't persist,the reference to a persist.function rembers the reference(identifier) a,not value 7)


//Case-3: when this all fucntions are inside another fucntions

function z2(){
    var b=900;
    function x2(){
        var a=7;
        function y2(){ //y forms a closure with scope of x and y
            console.log(a,b); //so i am trying to access it parents and parents parents scope also.
        } 
        y();
    }
    x();
}
z();
//even if you return y outside function it will still retained the refenernes to a and b(memory locations)


/*
uses of closure:

model design pattern
currying
functions like once
memoize
maintaining state in async world
setTimeouts
iterators

Use cases of closure:
1. Data Encapsulation: Closures are often used to create private variables or functions.
2. Callback Functions: Closures are widely used in asynchronous programming and event listeners.
3. Partial Application or Currying: Closures allow you to create specialized functions by pre-filling some arguments.
4. Memoization: Closures help in caching the results of expensive function calls.

Common Pitfalls
Overuse of closures can lead to memory leaks if references to variables are unintentionally retained.
Debugging closures can be tricky since the enclosed variables are not always explicitly visible.

*/







