//searching

//1. indexOf(): returns the index of the first occurrence of a specified element in an array.
let arr=[23,11,5,78,91,3];
console.log(arr.indexOf(11));

//2. includes(): checks if specified element is prsent by returning true or false
console.log(arr.includes(3));

//3. find():returns the first element in an array that satisfies the provided testing function.If no element satisfies the condition, it returns undefined.
console.log(arr.find((num)=>num>80));

//4. findIndex():returns the index of the first element that satisfies the provided testing function. If no element satisfies the condition, it returns -1.
console.log(arr.findIndex((num)=>num<10));

//5. some(): checks if at least one element in the array satisfies the provided testing function and returns true if any element matches, otherwise false.
console.log(arr.some(num=>num<5));

//6. every(): checks if all elements in the array satisfy the provided testing function. It returns true if all elements match, otherwise false.
console.log(arr.every(num=>num>10));  //false

//7. lastIndexOf():returns the index of the last occurrence of a specified element in an array. If the element is not found, it returns -1.
console.log(arr.lastIndexOf(num=>num>91));




