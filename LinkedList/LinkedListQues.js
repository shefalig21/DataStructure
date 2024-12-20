class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    addFirst(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }

    addLast(data){
        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }

    size(){
        let count=0;
        let current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }

    addAt(index,data){
        if (index<0 || index>this.size()){
            console.error("Invalid index");
            return;
        }

        const newNode=new Node(data);
        if (index===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }

        let current=this.head;
        for (let i=0;i<index-1;i++){
            current=current.next;
        }

        newNode.next=current.next;
        current.next=newNode;
    }

    addAtMiddle(data)
    {
        const middleIndex=Math.floor(this.size()/2);
        this.addAt(middleIndex,data);
    }

    removeTop(){
        if(!this.head) {
            return;
        }
        this.head=this.head.next;
    }

    removeLast(){
        if(!this.head) {
            return;
        }

        if(!this.head.next){
            this.head=null;
            return;
        }

        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;
    }

    removeAt(index){
        if(index<0 || index>=this.size()){
            console.error("Invalid index");
            return;
        }

        if(index===0) {
            this.head=this.head.next;
            return;
        }

        let current=this.head;
        for (let i=0;i<index-1;i++){
            current=current.next;
        }

        if (current.next){
            current.next=current.next.next;
        }
    }

    sort()
    {
        if(!this.head || !this.head.next)  //when list empty or only one elem.
        {
            return;
        }

        let current=this.head;
        let newArray=[];  //creating array and pushing elem. into it
        while(current!=null)
        {
            newArray.push(current.data);
            current=current.next;
        }

        newArray.sort((a,b)=>a-b);

        //linked list with sorted order
        current=this.head;
        for(let i=0;i<newArray.length;i++)
        {
            current.data=newArray[i];
            current=current.next;
        }
    }

    reverse()
    {
        let prev=null;
        let current=this.head;
        let next=null;

        while(current!=null)
        {
            next=current.next; //next node will be stored
            current.next=prev;
            prev=current;
            current=next;
        }

        this.head=prev;
        
    }

    removeDuplicate()
    {
        let current=this.head;

        let seen=new Set();
        let previous=null;

        while(current!=null)
        {
            if(seen.has(current.data))
            {
                previous.next=current.next;
            }
            else{
                //if not dupliacte,add to set and move to next node
                seen.add(current.data);
                previous=current;
            }
            current=current.next;
        }
    }

    /*
    findMiddle()
    {
        let count=0;
        let current=this.head;

        while(current)   //for counting nodes
        {
            count++;
            current=current.next;
        }

        const middleIndex=Math.floor(count/2);

        current=this.head;
        for(let i=0;i<middleIndex;i++)
        {
            current=current.next;
        }

        return current? current.data:null;

    }
*/

    findMiddle()
    {
        if(!this.head)
        {
            return;
        }

        let slowPointer=this.head;  //will move one step at time
        let fastPointer=this.head;  //will move 2 step at time

        while(fastPointer!==null && fastPointer.next!==null)   //when fastPointer reaches the end,the slow pointer will reach at middle of list.
        {
            slowPointer=slowPointer.next;
            fastPointer=fastPointer.next.next;

        }
        return slowPointer.data;

    }

    print(){
        let result="";
        let current=this.head;
        while (current) {
            result+=current.data+" ";
            current=current.next;
        }
        return result.trim(); // Removing the trailing space
    }
}

// Testing the LinkedList
let linkedlist = new LinkedList();

linkedlist.addFirst(20);
linkedlist.addFirst(10);
linkedlist.addFirst(30);
linkedlist.addLast(40);
linkedlist.addLast(50);
linkedlist.addLast(60);

console.log("Original List:", linkedlist.print());
console.log("Size of linked list:",linkedlist.size());

linkedlist.addAtMiddle(20);
console.log("After adding middle elmeent:",linkedlist.print());

linkedlist.sort();
console.log("Sorted linked List:",linkedlist.print());
linkedlist.reverse();
console.log("Reversed linked List:",linkedlist.print());

linkedlist.removeDuplicate();
console.log("after removing duplicate:",linkedlist.print());

console.log("Middle Node:",linkedlist.findMiddle());

