class Node{
    constructor(data)
    {
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor()
    {
        this.head=null;
    }

    addFirst(data)
    { //will create new node and its next will point to head and head ka previous will point to newNode.
        const newNode=new Node(data);
        newNode.next=this.head;

        if(this.head) //if head already exists
        {
            this.head.prev=newNode;  //head ka prev will be new node
        }
        this.head=newNode;
    }

    //addlast: we will traverse and od the same for tail.

    addLast(data)
    {
        const newNode=new Node(data);

        if(!this.head)  //if head doesn't exist.
        {
            this.head=newNode;
            return;
        }

        let current=this.head;
        while(current.next)  //means jab tak current ka next hain
        {
            current=current.next;
        }
        //jab end me aa gye
        newNode.prev=current;
        current.next=newNode;
    }

    size()
    {
        let count=0;
        let current=this.head;
        while(current!=null)
        {
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
            if (this.head){
                this.head.prev=newNode;
            }
            this.head=newNode;
            return;
        }

        let current=this.head;
        //now traverse till the index
        for(let i=0;i<index-1;i++){
            current=current.next;
        }

        newNode.prev=current;
        newNode.next=current.next;

        if(current.next){   //agar current ka next hai toh
            current.next.prev=newNode;
        }

        current.next=newNode;
    }


    removeFirst()
    {
        if(!this.head)  //agar head nhi hain
        {
            return;
        }

        this.head=this.head.next; //jab first elem remove karna hai,toh second ko head banaa padega
        
        if(this.head)
        {
            this.head.prev=null; //so that it is removed
        }   
    }

    removelast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;  // Only one node, so removing it makes the list empty.
            return;
        }
    
        let current = this.head;
        while (current.next) {  // Traversing until the last node.
            current = current.next;
        }
    
        current.prev.next = null; 
    }
    

    removeAt(index)
    {
        if(index<0 && index>this.size())
        {
            console.error("Invalid error");
            return;
        }

        if(index===0)
        {
            this.head=this.head.next;
            
            if(this.head)
            {
                this.head.prev=null;
            }
        }

        let current=this.head;
        for(let i=0;i<index-1;i++)
        {
            current=current.next;
        }

        if(current.next)
        {
            current.next=current.next.next;

            if(current.next)
            {
                current.next.prev=current;
            }
        }
    }

    print() {
        let current=this.head;
        let result=[];
        while(current!=null) {
            result.push(current.data);
            current=current.next;
        }
        return result.join(" ");
    }
}


const doublyll=new DoublyLinkedList();

doublyll.addFirst(10);
doublyll.addFirst(20);
doublyll.addFirst(30);
doublyll.addLast(60);
doublyll.addLast(50);
doublyll.addLast(40);

console.log(doublyll.print());

doublyll.addAt(1,55);
console.log("After adding element at 1 index:",doublyll.print());


doublyll.removeFirst();
console.log("Removing first ele:",doublyll.print());

doublyll.removelast();
console.log("Removing last ele:",doublyll.print());

doublyll.removeAt(1);
console.log("Removing element at index 1:",doublyll.print());
