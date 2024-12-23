/*
To check if tree is binary tree or not.
basic idea:
if the maximum value in left subtree is smaller than the node and if the minimum value in right subtree is greater than node.
and apply this across all nodes.
*/

class Node{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }

}
class BinarySearchTree
{
    constructor()
    {
        this.root=null;  //starting with empty tree initially
    }

    insert(value)
    {
        const newNode=new Node(value);
        if(!this.root)
        {
            this.root=newNode;
            return;
        }
        let current=this.root;
        while(true)
        {
            if(value<current.value)
            {
                if(!current.left)
                {
                    current.left=newNode;
                    return;
                }
                current=current.left;
            }
            else if(value>current.value)
            {
                if(!current.right)
                {
                    current.right=newNode;
                    return;
                }
                current=current.right;
            }
            else{
                return;
            }
        }
    }

    search(value)
    {
        let current=this.root;
        while(current)
        {
            if(value===current.value) return true;
            current=value<current.value?current.left: current.right;   
        }
        return false;

    }

    inorderTraversal(node=this.root)  //left,root,right
    {
        if(!node)  return; //if node null then nothing
        this.inorderTraversal(node.left);
        console.log(node.value);
        this.inorderTraversal(node.right);

    }

    preorderTraversal(node=this.root)   //root,left,right
    {
        if(!node) return;
        console.log(node.value);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);

    }
    postorderTraversal(node=this.root)   //left,right,root
    {
        if(!node) return;
        this.postorderTraversal(node.left);
        this.postorderTraversal(node.right);
        console.log(node.value);       
    }

    delete(value,node=this.root)
    {
        if(!node) return;
        //when 1 child:
        if(value<node.value)
        {
            node.left=this.delete(value,node.left);
        }
        else if(value>node.value)
        {
            node.right=this.delete(value,node.right);
        }
        else{
            //handling base cases:
            if(!node.left && !node.right) return  null;
            if(!node.left) return node.right;
            if(!node.right) return node.left;

            //when 2 child: find node with minimum value in its right subtree and replac this with minimum value node and remove it from tree

            let minnode=this.findMin(node.right);
            node.value=minnode.value; //replace with minium value
            node.right=this.delete(minnode.value,node.right); //deleting the value
        }
        return node;
    }

    findMin(node)  //to find minimum value in subtree
    {
        while(node.left)
        {
            node=node.left;         
        }
        return node.value;
    }

    findMax(node)
    {
        while(node.right)
        {
            node=node.right;
        }
        return node.value;
    }

    isBST(node=this.root)
    {
        if(!node)
        {
            return true;
        }

        //if left subtree exists and check maximum valu in left subtree is less than current node's value.
        if(node.left && this.findMax(node.left)>=node.value)
        {
            return false;
        }

        //if right subtree exists and check if its minimum value is greater than current node's value.

        if(node.right && this.findMin(node.right)<=node.value)
        {
            return false;
        }

        return this.isBST(node.left) && this.isBST(node.right);

    }
}

const binary=new BinarySearchTree();

binary.insert(8);
binary.insert(3);
binary.insert(10);
binary.insert(1);
binary.insert(6);
binary.insert(14);
binary.insert(4);
binary.insert(7);

binary.insert();


console.log(`Inorder Traversal:`);
binary.inorderTraversal();
console.log(`Preorder Traversal:`);
binary.preorderTraversal();
console.log(`Postorder Traversal:`);
binary.postorderTraversal();

console.log(`Search value 15:`);
binary.search(15);
console.log(`insert 11:`);
binary.insert(11);

console.log("Is a tree a vlaid BST?");
console.log(binary.isBST());

