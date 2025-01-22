//Prototype and prototypal inheritance 

//Prototype: In JavaScript, every object has an internal property known as [[Prototype]]. This property can either be null or reference another object. The object referenced by [[Prototype]] is commonly referred to as the object's prototype.
//(A prototype is a mechanism by which JavaScript objects inherit properties and methods from one another. Every object in JavaScript has an internal property called [[Prototype]] that links it to another object, known as its prototype.)


// Adds a shared method (greet) to the Person prototype so all Person objects can use it.

function Person(name) //function constructor used here to create objects with a name property
{
    this.name=name;
}

Person.prototype.greet=function() //greet method is added to the person Prototype
{//This means all instances of Person will share this method, saving memory since the method is not duplicated for each object.
    console.log(`Hello,my name is ${this.name}`);
};

const john=new Person("John");
john.greet();


//prototypal inheritance: Prototypal Inheritance refers to the process by which an object can inherit properties and methods from another object via its prototype chain.

//Links rabbit to animal via prototype inheritance, allowing rabbit to access properties from animal:
let animal={
    eats: true
};

let rabbit={
    jumps: true
};

rabbit.__proto__=animal; //setting animal as prototype of rabbit

console.log(rabbit.eats); //true(inherited from animal)
console.log(rabbit.jumps); //true(own property)

/*
key features:

The __proto__ property (or [[Prototype]]) exists on objects and refers to the object it inherits from.
When accessing a property or method, JavaScript first checks the object itself. If it doesn't find it, it searches the prototype chain.
*/


//1. Creating Inheritance Using Object.create():

const parent={
    greet: function()
    {
        console.log("hello from the parent!!");
    }
};

const child=Object.create(parent); //child inherits from parent
child.greet();

//2. Creating Inheritance Using Constructor Functions:

function Animal1(name)
{
    this.name=name;
}

Animal1.prototype.speak=function()
{
    console.log(`${this.name} makes a sound`);
}

function Dog(name)
{
    Animal1.call(this,name); //Call the parent constructor
}

Dog.prototype=Object.create(Animal1.prototype); //set up inheritance
Dog.prototype.constructor=Dog; //restore the constructor reference


Dog.prototype.speak=function()
{
    console.log(`${this.name} barks`);
};

const dog=new Dog("Rexx");
dog.speak();

/*Prototype Chain:
The prototype chain is the series of links between an object and its prototypes. When accessing a property, JavaScript looks:

On the object itself.
On its [[Prototype]] (the object it inherits from).
Repeats step 2 until it finds the property or reaches null.
*/










