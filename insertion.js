//Insertion:
//1. using push method(add to the end)
let arr=[23,11,5,8,15];
arr.push(1);
console.log(arr);
//2. using unshift method(add to the starting)
arr.unshift(78);
console.log(arr);
//3. using spread operator
console.log(17,...arr,90);
//4. splice(to add at specific index you want)
arr.splice(2,0,88,21);
console.log(arr);  //2 index which want to add,0 want to delete
//5. concat
let newArr=[3].concat(arr);
let newArr1=arr.concat(50,111);
let newArr2=[4,6,9].concat(...newArr1); //to add many
console.log(newArr,newArr1,newArr2);

