//Optional chaining (?.) allows you to safely access nested object properties without worrying about errors if an intermediate property is null or undefined.
//It short-circuits and returns undefined if the value before ?. is null or undefined.
//(basically used to access properties of nested objects.)

let user={
    name: "Shefali",
    address:{
        city: "Gurgaon"
    }
};

console.log(user.address?.city);    //gurgaon
console.log(user.address?.email);   //undefined

//In the second console.log, person.email is undefined, but instead of throwing an error, the ?. operator returns undefined safely.

console.log("");

user.greet?.();



//Also used to access elements in arrays or maps.

let arr=[10,20,30];
console.log(arr?.[1]);
console.log(arr?.[5]);


