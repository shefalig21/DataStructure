//Custom Error: custom errors can be created by extending the built-in Error class. This allows you to throw and catch errors that are specific to your application or logic, providing more meaningful error messages.

class CustomError extends Error{
    constructor(message)
    {
        super(message); // Call the parent class constructor with the message
        this.name=this.constructor.name;
        this.stack=(new Error()).stack;
    
    }
}

const myError=new CustomError('This is a custom error!');
console.log(myError.name); //CustomError
console.log(myError.message);
console.log(myError.stack);