//stack using array

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



