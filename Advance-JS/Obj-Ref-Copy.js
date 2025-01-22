//Object Referencing:Objects are stored by reference, not by value. Changes to one reference affect the other.

let obj1={name:"Shefali"};
let obj2=obj1;

obj2.name="Gupta";
console.log("Object referencing");
console.log(obj1.name);
console.log("");
//Two objects are considered equal (===) only if they reference the same memory address.

/*Copying Object Copying an object creates a new object, either shallowly or deeply.
1. Shallow Copy: 
A shallow copy creates a new object, but it only copies the top-level properties. If the properties are objects or arrays (nested structures), the shallow copy will still reference the original nested objects.*/

//Use Object.assign() or spread operator to create a shallow copy.
//1. using spread operator:
let original={name: "Shefali",details:{age:21,city:"Chandigarh"}};

//creating shallow copy
let shallowCopy={...original};
//modify the copy:

shallowCopy.name="Gupta";
shallowCopy.details.city="Mumbai";

console.log("After modifying value of original:")
console.log(original.name);   //unchanged
console.log(original.details.city);  //nested properties will be changed
console.log("");
//shallowCopy.details references the same object as original.details. Modifying the nested object affects both.


//2. Using assign() method:
const orig={
    name: "Shefali",
    age: 18,
    address:{
        street: '123 Main St',
        city: 'Wonderland'
    }
};

const copy=Object.assign({},orig);
console.log("Shallow copy using Assign method: ");
console.log(copy);
console.log("");

// Modifying a primitive value in the copy does not affect the original
copy.name='Bob';
console.log(copy.name); // "Bob"
console.log(orig.name); //"Shefali"
console.log("");

//Modifying a nested object in the copy does affect the original (shallow copy)
copy.address.city='New Wonderland';
console.log(copy.address.city); // "New Wonderland"
console.log(orig.address.city); // "New Wonderland" (both are the same reference)
console.log("");

/*2. Deep copy:A deep copy creates an entirely new object that is a complete, independent clone of the original. This includes all nested objects, arrays, or other data structures.
Changes made to the deep copy will not affect the original object, and vice versa. 

There are several ways to perform a deep copy in JavaScript:
1. Using JSON.stringify() and JSON.parse()
This is the simplest method for objects that contain only JSON-compatible data (i.e., no methods, undefined, Infinity, or circular references).
*/

let original1={
    name: "Shefali",
    details:{
        age: 21,
        city: "Chandigarh",
    },
    hobbies:["calligraphy","reading"]
};

let deepCopy=JSON.parse(JSON.stringify(original1));

//modifying deep copy:
deepCopy.details.city="New York";
deepCopy.hobbies.push("drawing");

//In deep copy,when value changed,it has no effect on original"
console.log("After changing values in deep copy");
console.log(original1.details.city);
console.log(original1.hobbies);
console.log("");

//2. Using Libraries (e.g., Lodash)
//Libraries like Lodash provide a utility function (_.cloneDeep) to simplify deep copying.
// npm install lodash

const _ = require('lodash'); // Import Lodash

let org = { name: "Shefali", details: { age: 18, city: "Delhi" } };

// Create a deep copy using Lodash
let deepCopy1 = _.cloneDeep(org);

// Modifying the deep copy
deepCopy1.details.city="Switz";

console.log("Using Lodash library for deep copying:");
console.log(org.details.city);  //remain unaffected
