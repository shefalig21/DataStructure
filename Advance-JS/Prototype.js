//Prototype:

function Animal(name){
    this.name=name;
}

Animal.prototype.speak=function(){
    console.log(`${this.name} makes a sound.`);
};

const dog=new Animal("Dog");
dog.speak(); // Dog makes a sound.

//Inheritance:

class Animal1{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal1{
    speak(){
        console.log(`${this.name} barks.`);
    }
}

const dog1=new Dog("Dog");
dog1.speak();



//Objects Without __proto__: Objects created with Object.create(null) have no prototype (__proto__ is undefined).
//These objects are used when you need a truly plain object with no inherited properties, often for dictionaries or maps.


const objWithoutProto=Object.create(null);

objWithoutProto.key="value";
console.log(objWithoutProto.key); // value
console.log(objWithoutProto.__proto__); // undefined

//Useful for dictionaries
const dictionary=Object.create(null);
dictionary["hello"]="world";
console.log(dictionary); // { hello: "world" }


