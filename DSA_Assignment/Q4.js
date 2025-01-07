function maxSlidingWindow(arr,k){
    const res=[];

    for(let i=0;i<=arr.length-k;i++){
        let windowMax=arr[i];
        
        //finding maximum element in current window
        for (let j=i+1;j<i+k;j++){
            windowMax=Math.max(windowMax, arr[j]);
        }

        res.push(windowMax);
    }

    return res;
}


const arr=[1, 3, -1, -3, 5, 3, 6, 7];
const k=3;
const result=maxSlidingWindow(arr,k);
console.log(result);
