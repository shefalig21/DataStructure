//traversal:

let arr=[23,11,5,8,17];
//1. using for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//2. using forEach 
arr.forEach((value)=>{
    console.log(value);
})
//3. using for of loop
for(let num of arr)
{
    console.log(num);
}
//4. for in loop:
for(let val in arr)
{
    console.log(`The array: ${val}`);
}

//5. using map
arr.map((num)=>{
    console.log(num);
})
//6. using filter:
arr.filter((val)=>{
    console.log(`The array is:${val}`);
});

//7. using while loop
let i=0; 
while (i<arr.length) {
    console.log(arr[i]);
    i++; 
}
//8. do while:
let index=0;
do{
    console.log(arr[index]);
    index++;

}while (index<arr.length);

//9. spread operator:
console.log(...arr);
//10. using reduce:
arr.reduce((_,value)=>{
    console.log(value);
    return value;
});
//11. every method:
arr.every((val)=>{
    console.log(val);
    return val;
})

//12. using some method
arr.some((value)=>{
    console.log(value);
}) 
