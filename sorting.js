//Sorting:

//1. using sort() method:works for strings or for single digit no's only
let arr=["banana","cherry","apple"];
arr.sort();
console.log(arr);

//2. using sort(): for numbers(arrays)
let arr1=[45,11,23,5,98,17];
arr1.sort((a,b)=>a-b);  //in ascending order
console.log(arr1);

//3. using sort(): for numbers(arrays)
arr1.sort((a,b)=>b-a);  //in descending order
console.log(arr1);

//4. using toSorted method:
console.log(arr1.toSorted());

//5. using bubble sort:

function bubbleSort(numbers) {
    const n=numbers.length;

    for (let i= 0;i< n-1;i++) {
        for (let j=0; j<n-1-i;j++) {
            if (numbers[j]>numbers[j + 1]) {

                let temp=numbers[j];
                numbers[j]=numbers[j+1];
                numbers[j+1] =temp;
            }
        }
    }
    return numbers;
}

let numbers = [23, 44, 11, 78, 51, 8];
console.log(bubbleSort(numbers)); 
