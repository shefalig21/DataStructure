//Promise-API:

// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let success=true;
//         if(success)
//         {
//             resolve("Custom promise resolved");
//         }
//         else{
//             reject("Custom promise rejected");
//         }
//     },1000);
// })

// myPromise
// .then(result=> console.log(result))
// .catch(error=> console.log(error));

// const resolvedPromise=Promise.resolve("Resolved with Promise.resolve()");

// resolvedPromise
// .then(result=> console.log(result))
// .catch(error=> console.log(error));


// Create a custom Promise that resolves after 1 second
const myPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Custom Promise Resolved!");
        }else{
            reject("Custom Promise Rejected!");
        }
    },1000);
});

// Using Promise.resolve() (Resolved promise)
const resolvedPromise=Promise.resolve("Resolved with Promise.resolve()");

// Using Promise.reject() (Rejected promise)
const rejectedPromise=Promise.reject("Rejected with Promise.reject()");

// Using Promise.all() (Wait for all promises to resolve)
const allPromises=Promise.all([myPromise, resolvedPromise, rejectedPromise]);

// Using Promise.allSettled() (Wait for all promises to settle)
const allSettledPromises=Promise.allSettled([myPromise, resolvedPromise, rejectedPromise]);

// Using Promise.race() (Resolve/reject as soon as one promise resolves/rejects)
const racePromises=Promise.race([myPromise, resolvedPromise, rejectedPromise]);

// Using Promise.any() (Resolve when any promise resolves, reject if all fail)
const anyPromises=Promise.any([myPromise, resolvedPromise, rejectedPromise]);

// Handle all promises
myPromise
    .then(result=>console.log(result))
    .catch(error=>console.log(error));

resolvedPromise
    .then(result=>console.log(result))
    .catch(error=>console.log(error));

rejectedPromise
    .then(result=>console.log(result))
    .catch(error=>console.log(error));

// Using Promise.all() to handle multiple promises
allPromises
    .then(results=>{
        console.log("Promise.all() Results:", results); // Will show resolved values of all promises
    })
    .catch(error=>{
        console.log("Promise.all() Error:", error); // Will catch rejection from any promise
    });

// Using Promise.allSettled() to handle multiple promises (both fulfilled and rejected)
allSettledPromises
    .then(results=>{
        console.log("Promise.allSettled() Results:", results); 
        // It will give the status and value/reason of each promise
    });

// Using Promise.race() to resolve/reject based on the first promise to settle
racePromises
    .then(result=>{
        console.log("Promise.race() Result:", result); // The first promise to resolve/reject
    })
    .catch(error=>{
        console.log("Promise.race() Error:", error); // The first rejected promise
    });

// Using Promise.any() to resolve when any promise resolves
anyPromises
    .then(result=>{
        console.log("Promise.any() Result:", result); // First resolved promise
    })
    .catch(error=>{
        console.log("Promise.any() Error:", error); // Will only happen if all promises are rejected
    });
