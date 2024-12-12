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



