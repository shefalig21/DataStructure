/*Proxy: The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

Description:
The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. 
Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

You create a Proxy with 2 parameters:
target: the original object which you want to proxy
handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

Proxy and reflect are 2 different things but they are used internally together and
for ex: hamare pass object hai aur koi user usme changes karna chahta hain toh voh proxy ke through jata hain.

and we need two parameters for proxy:
target and handler

*/

// const p1={  //target object
//     age:18,
// };

// const p1Proxy=new Proxy(p1,{
//     get(target,prop){
//         console.log({target,prop});
//         return 'testing';

//     }
// });

// p1Proxy.age=-10;

// console.log(p1Proxy.age);
// console.log(p1Proxy.fname);



const target={   //target object
    message1: "hello",
    message2: "everyone",
};

const handler={}; //as handler is empty,this proxy behaves just like original target
const proxy1=new Proxy(target,handler);

console.log(proxy1.message1);
console.log(proxy1.message2);
console.log("");
console.log("");

//to customize proxy,we define function on handler object

const p1={ //target object
    message1: "Hello Friends",
    messgae2: "Chai pee lo"
};

const handler2={   //creating handler
    get(target,prop)
    {
        return "Holassss";
    },
};

const proxy2=new Proxy(target,handler2); //creating instance of Proxy

console.log(proxy2.message1);
console.log(proxy2.message2);
console.log("");
console.log("");


//another way to do this:

const pOne={
    mes1: "Heyyy",
    mes2: "Guys"
};

const proxyOne=new Proxy(pOne,{
    get(pOne,prop)
    {
        return "Wohoooo";
    }
});


console.log(proxyOne.mes1);
console.log(proxyOne.mes2);




