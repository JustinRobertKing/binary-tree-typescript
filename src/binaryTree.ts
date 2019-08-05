class TreeNode<T> {
    constructor(
        private _data: T,
        private _left: TreeNode<T> = null as TreeNode<T>,
        private _right: TreeNode<T> = null as TreeNode<T>
    ) {}
    get left(): TreeNode<T> {
            return this._left
        }
        set left(node: TreeNode<T>) {
            this._left = node;
        }
        get right(): TreeNode<T> {
            return this._right
        }
        set right(node: TreeNode<T>) {
            this._right = node;
        }
        get data(): T {
            return this._data;
        }
}
class BinarySearchTree<T> {
    constructor(
        private _root: TreeNode<T> = null as TreeNode<T>
    ) {}
    insert(data:T, node: TreeNode<T> = this._root) {
        if (this._root === null) {
            this._root = new TreeNode<T>(data);
            return node;
        }
    
    // Otherwise recurse down the tree...
    if (data < node.data && node.left == null) {
        node.left = new TreeNode(data);
    } else if (data < node.data) {
        node.left = this.insert(data, node.left)
    } else if (data > node.data && node.right === null) {
        node.right = new TreeNode(data);
    } else if ( data > node.data) {
        node.right = this.insert(data, node.right);
    }
    return node;
    // If data < node.data and left is empty
    // set left child directly
    // else if data < node.data 
    // recurse down left child tree
    // if data > node.data and right is empty
    //   set right child directly
    //  else if data > node.data
    //  recurse down right child subtree
    }
    inOrderTraversal(node: TreeNode<T> = this._root) {
        // left, root, right
        if (node) {
            if (node.left) {
                this.inOrderTraversal(node.left);
            }
            console.log(node.data);
            if (node.right) {
                this.inOrderTraversal(node.right)
            }
        }
    }
    // preOrderTraversal(node: TreeNode<T>)
}
var bst = new BinarySearchTree<number>();
bst.insert(5)
bst.insert(25)
bst.insert(40)
bst.insert(30)
bst.insert(10)
bst.insert(35)
bst.insert(20)
bst.insert(15)
bst.insert(1)
bst.insert(-10)
bst.inOrderTraversal();