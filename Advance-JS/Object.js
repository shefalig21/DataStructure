//basic example of object
/*
let person={
    name: "Shefali",
    age: 21,
    greet: function()
    {
        console.log(`Hello,my name is ${this.name}.`);
    }
};

person.greet();
*/
const person={
    name:"Shefali",
    age:21,
    isStudent:true,
};

//How to create Object:

//1. using Object literal:
const person5={
    name: "Angelinaa",
    age: 11
};

//2. Using new keyword:
let user10=new Object();
user10.name="Aryan";
user10.age=22;

//3. Using constructor function:
function Person8(name,age)
{
    this.name=name;
    this.age=age;
}

let Cassy=new Person8("Cassy",45);

//4. Using classes:

class CarY{
    constructor(brand,year)
    {
        this.brand=brand;
        this.year=year;
    }
}

let SUV=new CarY("Mahindra",2003);

//Acess properties:
//1. using dot notation:
console.log(person.name);
console.log(person.isStudent);
//2. using bracket notation:
console.log(person['age']);

//Modifying values:
person.age=22;
//person.isStudent=false;
person['isStudent']=false;
console.log("");
console.log("After modifying the values are:");
console.log(person.age);
console.log(person['isStudent']);

//Adding new properties to an object:
person.city="New York";
person['country']="USA";
console.log("");
console.log("Adding new properties City and Country:");
console.log(person['city']);
console.log(person['country']);

//Deleting object properties:
//delete person.age;
//delete person['city'];

//Iterating over object properties:
//1. using for in loop:
console.log("");
console.log("The key-value pair of Object are: ")
for(let key in person)
{

    console.log(`${key}: ${person[key]}`);
}
console.log("");

//2. using Object.keys(): returns an array of objects own property names.
const keys=Object.keys(person);
console.log("The keys are");
console.log(keys);
console.log("");

//3. using Object.values(): return an array of object values

console.log("The values of key are:");
console.log(Object.values(person));
console.log("");

//4. using Object.entries: returns an array of objects key-value pair as an array

console.log("The key-value pairs are:");
console.log(Object.entries(person));
console.log("");

//Object methods:

/*1. Object.assign(): copies properties from one or more source objects to a target object.

Object.assign(target, source):
Target: The object that receives the properties.
Source: The object that provides the properties to be copied.
*/


const person1={
    firstName: "Shefali",
    lastName: "Gupta",
    age: 21,
    eyeColor:"Brown",
};

const person2={
    firstName:"Taylor",
    lastName: "Swift"
};

Object.assign(person1,person2);
console.log(person1);

//OR

const source={name: "Shefali",age: 23};
const target={profession: "Student"};

Object.assign(target,source);
console.log(target);
console.log("");

//2.Object.create(object): Creates an object from an existing object.
//(Creates a new object with the specified prototype object.)

const animal={sound: "Roar"};
const lion=Object.create(animal);
console.log(lion.sound);
console.log("");

//3. Object.entries(object): Returns an array of the key/value pairs of an object.

const per={ name: "Anna",age: 19,profession: "Student"};
const entries=Object.entries(per);
console.log(entries);
console.log("");

//4. Object.fromEntries(): Creates an object from a list of key/value pairs (array).

const entries1=[['name','Shefu'],['isStudent',true]];
const obj2=Object.fromEntries(entries);
console.log(obj2);
console.log("");

//5. Object.keys(object): Returns an array of the keys of an object

const student={
    name: "Khushi",
    age:21,
    isStudent: true
};

console.log("The keys of object are:");
console.log(Object.keys(student));
console.log("");

//6. Object.values(object): Returns an array of the property values of an object

const student1={
    name: "Khushi",
    age:21,
    isStudent: true
};

console.log("Following are values of the keys:");
console.log(Object.values(student));
console.log("");

//7. Object.groupBy(object, callback)     (ES2022)
//Groups the elements of an object according to a function. 
//This method is often used in modern JavaScript, but may not be available in older versions.

// const users={
//     user1: {name:"Shefali",role: "Admin"},
//     user2: {name: "Sanyam",role: "Admin"},
//     user3: {name: "John",role: "Member"}

// };

// const grouped=Object.groupBy(users,user=>user.role);
// console.log("Using Object.groupBy: ");
// console.log(grouped);
// console.log("");

//8. Object.freeze(object): Prevents any modification to the object (no adding, deleting, or changing properties).

const users1={name: "shefali", role: "Admin"};
Object.freeze(users1);

users1.name="sanyam"; //no effect
delete users1.role;   //no effect
console.log("After using Object.freeze,object is same: ");
console.log(users1);
console.log("");

//9. Object.seal(object): Prevents adding or deleting properties, but allows modification of existing properties.

const users2={name: "Shefali", role: "Admin"};
Object.seal(users2);

users2.name="sanyam";  //will work
delete users2.role;  //no effecr
users2.age=21;   //no effect
console.log("After using Object.seal,the Object is: ");
console.log(users2);
console.log("");

//10. Object.isFrozen(object): Checks if an object is frozen.

const User=Object.freeze({name: "Shefu", role: "exclusive member"});
console.log("Is object Frozen?")
console.log(Object.isFrozen(User));
console.log("");

//11. Object.isSealed(object): Checks if an object is sealed.

const User1=Object.freeze({name: "Shefu"});
console.log("Is object Sealed?")
console.log(Object.isSealed(User1));
console.log("");

//12. Object.isExtensible(object): Checks if new properties can be added to an object.

const user3={name: "John"};
console.log(Object.isExtensible(user3));

console.log("Is object Extensible?")
console.log("");

//13. Object.preventExtensions(object): Prevents adding new properties to an object.


const user4={name: "Chandler"};

console.log(Object.preventExtensions(user4));

user4.age=34;  //no effect
console.log(user4);
console.log("");

