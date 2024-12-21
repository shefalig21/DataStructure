/*
stack using array:

let stack=[23,14,8,19,56,91];
function push()
{
    stack.push(11);
    return stack;
}
console.log(push());

function pop() {

    stack.pop();
    return stack;
    
  }
  console.log(pop());


function peek()
{
    return stack[stack.length-1];
}
console.log(peek());

function isEmpty(){
    if(stack.length===0){
        return true;     
    }
    else{
        return false;
    }

}
console.log(isEmpty());


function printStack()
{
    return stack.join();  //to join all elements into a string
}
console.log(printStack());


//stack using constructor:

class Stack{
    constructor()
    {
        this.stack=[];
    }

    push(element)
    {
        this.stack.push(element);
    }

    pop()
    {
        if(this.isEmpty())
        {
            return "Stack is Empty.Can't perform pop.";
        }
        return this.stack.pop();
    }
    peek()
    {
        if(this.isEmpty())
        {
            return "Stack is Empty.Can't perform peek.";
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty()
    {
        return this.size()===0;
    }

    size()
    {
        return this.stack.length;
        
    }

    printStack()
{
    return this.stack.join(",");  //to join all elements seperated by comma in string
}

}


const stack=new Stack();

stack.push(23);
stack.push(11);
stack.push(56);
stack.push(88);

//console.log(stack.peek());
//console.log(stack.pop());
//console.log(stack.peek());

console.log(stack.size());
console.log(stack.printStack());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

**Ques**

1. reverse a string in stack using array:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
}

function reversedString(str)
{
    const stack=new Stack();
    
    for(let char of str)  
    {
        stack.push(char);  //push all characters into stack
    }
    
    let reversed="";
    while(!stack.isEmpty())
    {
        reversed+=stack.pop();  //pop charcater from stack and add to new stringg
    }
    return reversed;
    
}

let str="hello"
let rev=reversedString(str);
console.log(rev);


2. Sort:
using in-built sort method:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("stack is empty");
        }
        else{
            return this.stack[stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }
}

function sortStack(stack)
{
    let arr=[];
    while(!stack.isEmpty())
    {
        arr.push(stack.pop());
    }
    
    arr.sort((a,b)=>a-b);
    
    for(let ele of arr)
    {
        stack.push(ele);
    }
}

const stack=new Stack();
stack.push(23);
stack.push(5);
stack.push(44);
stack.push(12);
stack.push(91);

console.log(stack.printStack());
sortStack(stack);
console.log(stack.printStack());

//Or
instead of using sort in-built method can use bubble osrt.

Code:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }

}

function bubbleSort(arr)
{
    let n=arr.length;
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

function sortStack(stack)
{
    let arr=[];
    while(!stack.isEmpty())
    {
        arr.push(stack.pop());
    }
    
    arr=bubbleSort(arr);
    
    for(let ele of arr)
    {
        stack.push(ele);
    }
}

const stack = new Stack();
stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log(stack.printStack());
sortStack(stack);
console.log(stack.printStack());


3. to find smallest and largest element in stack:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }

findSmallest()
{
    if(this.isEmpty())
    {
        return "stcak is empty";
    }
  
        return Math.min(...this.stack);
}

findLargest()
{
    if(this.isEmpty())
    {
        return "stack is empty";
    }
    return Math.max(...this.stack);
  }
}

const stack = new Stack();

stack.push(23);
stack.push(11);
stack.push(56);
stack.push(88);

console.log(stack.printStack());
console.log(stack.findSmallest());
console.log(stack.findLargest());


//OR


class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }

findSmallest()
{
    if(this.isEmpty())
    {
        return "stack is empty";
    }
    let smallest=this.stack[0];
    for(let i=0;i<this.stack.length;i++)
    {
        if(this.stack[i]<smallest)
        {
            smallest=this.stack[i];
        }
    }
    return smallest;
}

findLargest()
{
    if(this.isEmpty())
    {
        return "Stack is empty";
    }
    let largest=this.stack[0];
    for(let i=0;i<this.stack.length;i++)
    {
        if(this.stack[i]>largest)
        {
            largest=this.stack[i];
        }
    }
    return largest;
   
}
}

const stack = new Stack();

stack.push(23);
stack.push(11);
stack.push(56);
stack.push(88);

console.log(stack.printStack());
console.log(stack.findSmallest());
console.log(stack.findLargest());

4. 2nd largest element in stack:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }
   
    find2Largest()
    {
        if(this.isEmpty())
        {
            return "Stack is empty";
        }
        let largest=-Infinity;
        let secondLargest=-Infinity;
        
        for(let i=0;i<this.stack.length;i++)
        {
            if(this.stack[i]>largest)
            {
                secondLargest=largest;
                largest=this.stack[i];
            }
            else if(this.stack[i]>secondLargest && this.stack!==largest)
            {
                secondLargest=this.stack[i];
            }
            
        }
        if(secondLargest===-Infinity)
        {
            return "doesn't have elemnet";
        }
        return {largest,secondLargest};
    }
}

const stack = new Stack();

stack.push(23);
stack.push(11);
stack.push(56);
stack.push(88);

console.log(stack.printStack());
console.log(stack.find2Largest());

5. sum of elements of stack:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }
    
    sum()
    {
        if(this.isEmpty())
        {
            return "Stack is empty";
        }
        
        return this.stack.reduce((acc,curr)=>acc+curr,0);
    }
   
}


const stack = new Stack();

stack.push(23);
stack.push(11);
stack.push(56);
stack.push(88);

console.log(stack.printStack());
console.log(stack.sum());

6. Balanced paranthesis:
for this bracket: ()

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }
}

function isBalancedParentheses(str)
{
    const stack=new Stack();
    
    for(let char of str)
    {
        if(char==='(')
        {
            stack.push(char);
        }
        else if(char===')')
        {
            if(stack.isEmpty() || stack.pop()!=='(')
            {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

console.log(isBalancedParentheses("(())"));    
console.log(isBalancedParentheses("(()")) ;      
console.log(isBalancedParentheses("()()"));     
console.log(isBalancedParentheses("(()())"));   
console.log(isBalancedParentheses("())")); 


7. Balanced Parantheses for all types of brackets:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }
}

function isBalancedExpression(str)
{
    const stack=new Stack();
    
    const matchingPairs={
        ')':'(',
        '}':'{',
        ']':'[',
    };
    
    for(let char of str)
    {
        if(char==='(' || char==='{' || char==='[')
        {
            stack.push(char);
        }
        else if(char===')' || char==='}' ||char===']')
        {
            if(stack.isEmpty() || stack.pop()!==matchingPairs[char])
            {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

console.log(isBalancedExpression("{[()]}"));   
console.log(isBalancedExpression("{[(])}"));   
console.log(isBalancedExpression("{[()]()}")); 
console.log(isBalancedExpression("{[}"));      
console.log(isBalancedExpression(""));         
console.log(isBalancedExpression("[()]{}{[()()]()}")); 
console.log(isBalancedExpression("{[(()}]"));  

8. evalute postfix expression:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack.pop();
        }
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("Stack is empty");
        }
        else{
            return this.stack[this.stack.length-1];
        }
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    printStack()
    {
        return this.stack.join(",");
    }
}

function evaluatePostfix(expression)
{
    const stack=new Stack();
    const operators=['+','-','*','/'];
    
    //traversing each charcater
    for(let char of expression.split(' '))
    {
        //if char is number,push into stack
        if(!operators.includes(char))  
        {
            stack.push(parseInt(char)); //converting string to number and pushing
        }
        else{
            //if operator then,pop 2 elements and perform that operation on them
            let operand2=stack.pop();
            let operand1=stack.pop();
            let result;
            
            switch(char)
            {
                case '+':
                    result=operand1+operand2;
                    break;
                    
                case '-':
                    result=operand1-operand2;
                    break;
                
                case '*':
                    result=operand1*operand2;
                    break;
                    
                case '/':
                    result=operand1/operand2;
                    break;
            }
            stack.push(result); //push result into stack
        }
    }//at end it should contain on element taht should be result
     return stack.pop();
}

const expression="5 3 + 2 * 9 -";
console.log(evaluatePostfix(expression));

9. infix to postfix:

(.test() method is a function that is available on RegExp (regular expression) objects. It is used to test whether a given string matches a pattern defined by the regular expression.)

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            return this.stack.pop();
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            return this.stack[this.stack.length - 1];
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        return this.stack.join(",");
    }
}

function precedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0;
}

function infixToPostfix(expression) {
    const stack = new Stack();
    let postfix = [];

    for (let char of expression) {
        // If the character is an operand, add it to the result
        if (/[a-zA-Z0-9]/.test(char)) {
            postfix.push(char);
        }
        // If the character is '(', push it to the stack
        else if (char === '(') {
            stack.push(char);
        }
        // If the character is ')', pop from stack until '(' is encountered
        else if (char === ')') {
            while (!stack.isEmpty() && stack.peek() !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); // pop '('
        }
        // If the character is an operator
        else if (['+', '-', '*', '/'].includes(char)) {
            while (!stack.isEmpty() && precedence(stack.peek()) >= precedence(char)) {
                postfix.push(stack.pop());
            }
            stack.push(char);
        }
    }

    // Pop all remaining operators from the stack
    while (!stack.isEmpty()) {
        postfix.push(stack.pop());
    }

    return postfix.join('');  // Return as a single string
}

const infixExpression = "(5+3)*2";
const postfixExpression = infixToPostfix(infixExpression);
console.log(postfixExpression);  // Output: "53+2*"

10. infix to prefix:


class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            return this.stack.pop();
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            return this.stack[this.stack.length - 1];
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        return this.stack.join(",");
    }
}

function precedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0;
}

function infixToPostfix(infix) {
    const stack = new Stack();
    let postfix = "";

    for (let char of infix) {
        if (/[A-Za-z0-9]/.test(char)) {
            // If it's an operand (number/variable), add it to the result
            postfix += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            // Pop until '(' is encountered
            while (!stack.isEmpty() && stack.peek() !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Pop '(' from the stack
        } else {
            // If it's an operator
            while (
                !stack.isEmpty() &&
                precedence(stack.peek()) >= precedence(char)
            ) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    // Pop remaining operators from the stack
    while (!stack.isEmpty()) {
        postfix += stack.pop();
    }

    return postfix;
}

function infixToPrefix(infix) {
    Reverse the infix expression and swap parentheses
    let reversedInfix = "";
    for (let i = infix.length - 1; i >= 0; i--) {
        if (infix[i] === '(') {
            reversedInfix += ')';
        } else if (infix[i] === ')') {
            reversedInfix += '(';
        } else {
            reversedInfix += infix[i];
        }
    }

    Convert the reversed infix expression to postfix
    let postfix = infixToPostfix(reversedInfix);

    Reverse the postfix result to get the prefix expression
    let prefix = "";
    for (let i = postfix.length - 1; i >= 0; i--) {
        prefix += postfix[i];
    }

    return prefix;
}


const infix = "(A-B/C)*(A/K-L)";
const prefix = infixToPrefix(infix);
console.log("Infix Expression: ", infix);
console.log("Prefix Expression: ", prefix);

*/

//11. convert prefix to infix expression:

class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(element)
    {
        this.stack.push(element);
    }
    pop()
    {
        if(this.isEmpty())
        {
            return "Stack is empty";
        }
        return this.stack.pop();
    }
    peek()
    {
        if(this.isEmpty())
        {
            return "Stack is empty";
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty()
    {
        return this.stack.length===0;
    }

    printStack()
    {
        return this.stack.join(" ");
    }

}

function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
}

function prefixToInfix(prefix){
    const stack=new Stack();
    for (let i=prefix.length-1;i>=0;i--) {
        const char=prefix[i];

        if (isOperator(char)) {
            let operand1=stack.pop();
            let operand2=stack.pop();

            const infix=`(${operand1} ${char} ${operand2})`;

            stack.push(infix);
        } else {
            stack.push(char);
        }
    }

    return stack.pop(); 
}

const prefix="*-A/BC-/AKL";
const infix=prefixToInfix(prefix);
console.log(infix);


