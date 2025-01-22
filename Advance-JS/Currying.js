//Currying: Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking one argument.
//Currying is useful when you need to partially apply a function and reuse parts of it.

//one way to do using bind method: 
let multiply=function(x,y)
{
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(3);


let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);



//other way to do using closures:

let sum=function(x)
{
    return function(y)
    {
        console.log(x+y);
    }
}

let sumTwo=sum(2);
sumTwo(5);




