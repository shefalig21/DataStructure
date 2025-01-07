class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function findLCA(root, node1, node2){
    //if root is null or equal to node 1or 2
    if(!root || root.value===node1 || root.value===node2){
        return root;
    }

    //recursively searcing for nodes in the left and right subtrees
    const left=findLCA(root.left,node1,node2);
    const right=findLCA(root.right,node1,node2);

    if (left ==null) {
        return right;
    }
    else if (right == null){
        return left;
    }

    //otherwise return non null valu
    return root;
}

const root=new TreeNode(3);
root.left=new TreeNode(5);
root.right=new TreeNode(1);
root.left.left=new TreeNode(6);
root.left.right =new TreeNode(2);
root.right.left=new TreeNode(0);
root.right.right=new TreeNode(8);
root.left.right.left=new TreeNode(7);
root.left.right.right=new TreeNode(4);

const node1=4,node2=8;
const lca=findLCA(root,node1,node2);

if(lca){
    console.log(`LCA of ${node1} and ${node2}: ${lca.value}`);
} else {
    console.log(`No common ancestor found`);
}

