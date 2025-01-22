//Property Flags and Descriptors:In JavaScript, every property has associated flags and descriptors that define its behavior.


let user={
    name: 'Shefali',
    age:21,
    salary: 75000
};


//You can access a property’s descriptors using: Object.getOwnPropertyDescriptor(obj, property).
//getOwnPropertyDescriptors:(gives information for all key-value pairs) is a method of object which returns all the properties of an object with their flags and descriptors.


//to access for all values:
const descriptor=Object.getOwnPropertyDescriptors(user);
console.log(descriptor);

//to return the flag and descriptor of a specific property of an object.

const descriptors=Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptors);
 
//1. writable: whether the property value can be cahnged

let obj={
    name: 'Shefu',
    age:21,
    salary: 75000
};

Object.defineProperty(obj,"name",{writable: false});
user.name="Gupta";
console.log("");
console.log(obj.name);


//2. enumerable: Determines whether the property shows up during enumeration (e.g., for...in or Object.keys()).

Object.defineProperty(obj,"name",{enumerable: false});
console.log(Object.keys(obj));

Object.defineProperty(obj,"name",{enumerable: true});
console.log(Object.keys(obj));

//3. configurable: Determines whether the property can be deleted or its descriptors modified.

Object.defineProperty(obj,"name",{configurable: false});
delete obj.name;
console.log(obj.name);  //shefu


//Defining Properties with Descriptors: Use Object.defineProperty() to create or modify properties with specific flags.

const obj1={};
Object.defineProperty(obj1,"name",{
    value:" Shefuddi",
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(obj1.name); //Shefuddi
obj1.name="Gupta"; // Error in strict mode or ignored


//Defining Multiple Properties: Use Object.defineProperties() to define multiple properties at once.

const obj2={};
Object.defineProperties(obj2,{
    name:{vaue: "Aman",writable: true},
    age:{value:25,enumerable: true}
});

console.log(obj2);

