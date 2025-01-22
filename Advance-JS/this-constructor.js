//this keyword: refers to the current object

let obj={
    name: "Shefali",
    age: 19,
    greet: function()
    {
        console.log(this.name);
    }
};

obj.greet();

//constructor: A special function for initializing objects when using a class or constructor function.

function Person(name,age)
{
    this.name=name;
    this.age=age;
}

let myPer=new Person("Shefu",19);
console.log("");
console.log(myPer.age);


//new: Used to create a new instance of an object.

function Car(brand,model,year)
{
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.getDetails=function()
    {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}

let car1=new Car("Tesla","Model S",2021);
let car2=new Car("BMW","X5",2015);

console.log("");
console.log(car1.getDetails());
console.log(car2.getDetails());

//super: The super keyword in JavaScript is used in classes to access and call functions on an object's parent (or superclass). It is commonly used in class inheritance to refer to the parent class's methods or constructor.

class Animal{
    constructor(name){
        this.name=name;
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name); //Calls parent class's constructor
        this.breed=breed;
    }
}

const dog=new Dog("Buddy", "Golden Retriever");
console.log(dog.name);  //Buddy
console.log(dog.breed); //Golden Retriever
