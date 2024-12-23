class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor()
    {
        this.front=null;
        this.rear=null;        
    }

isEmpty()
{
    return this.front===null;
}

enqueue(value)
{
    const newNode=new Node(value);
    if(this.isEmpty())
    {
        this.front=this.rear=newNode;
    }
    else{
        this.rear.next=newNode;
        this.rear=newNode;
    }
}

dequeue()
{
    if(this.isEmpty())
    {
        console.log("Queue is mpty");
        return null;
    }
    const dequeVal=this.front.value;   //value of front node
    this.front=this.front.next; //upadting front value to next
    if(!this.front)
    {
        this.rear=null;//when queue empty also rear null.
    }
    return dequeVal;
}
peek()
{
    if(this.isEmpty())
    {
        console.log("Queue is empty");
        return null;     
    }
    return this.front.value;
}

display(){
    if(this.isEmpty()){
        console.log("Queue is empty");
        return;
    }
    let current=this.front;
    let queueDisplay="";
    while(current){
        queueDisplay+=current.value + " "; 
        current=current.next;
    }
    console.log("Queue:"+queueDisplay.trim());
}

}

const que=new Queue();

que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.enqueue(40);

que.display();

console.log(que.dequeue());
console.log(que.peek());

console.log(que.dequeue());
console.log(que.peek());
