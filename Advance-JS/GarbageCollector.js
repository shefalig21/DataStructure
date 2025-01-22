let obj1={name: "Shefali"};
let obj2=obj1;

console.log(obj1.name);
console.log(obj2.name);

//now,we remove references to the object
obj1=null; // obj1 no longer points to the object

//obj2 still references the object, so it is not garbage collected yet
console.log(obj2.name); // "Shefali"

//once obj2 is also set to null, the object becomes unreachable and can be garbage collected
obj2=null;




