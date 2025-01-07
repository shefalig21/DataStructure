class ListNode{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

function detectAndRemoveLoop(head){
    //cehcking if list is empty or has only one node
    if(!head||!head.next) return;

    //taking two pointers
    let slow=head,fast=head;
    //slow move one step at atime and fast two steps at atime

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast) break;//if they meet,then means there is an loop
    }

    //when no loop,return
    if(slow!==fast) return;

    //once loop is detected then again set slow pointer to head  and move both one step at a time until they meet at start of loop
    slow=head;
    while(slow.next!==fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    //removing loop
    fast.next=null;
}

// Helper function to print the linked list
function printList(head) {
    let current=head;
    let result="";
    while(current){
        result+=`${current.value} -> `;
        current=current.next;
    }
    result+="NULL";
    console.log(result);
}


const head=new ListNode(1);
head.next=new ListNode(2);
head.next.next= new ListNode(3);
head.next.next.next=new ListNode(4);
head.next.next.next.next=new ListNode(5);
head.next.next.next.next.next=head.next.next;  // Creating a loop (5 -> 3)

detectAndRemoveLoop(head);

console.log("Modified List:");
printList(head);
