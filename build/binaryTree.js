class TreeNode {
    constructor(_data, _left = null, _right = null) {
        this._data = _data;
        this._left = _left;
        this._right = _right;
    }
    get left() {
        return this._left;
    }
    set left(node) {
        this._left = node;
    }
    get right() {
        return this._right;
    }
    set right(node) {
        this._right = node;
    }
    get data() {
        return this._data;
    }
}
class BinarySearchTree {
    constructor(_root = null) {
        this._root = _root;
    }
    insert(data, node = this._root) {
        if (this._root === null) {
            this._root = new TreeNode(data);
            return node;
        }
        // Otherwise recurse down the tree...
        if (data < node.data && node.left == null) {
            node.left = new TreeNode(data);
        }
        else if (data < node.data) {
            node.left = this.insert(data, node.left);
        }
        else if (data > node.data && node.right === null) {
            node.right = new TreeNode(data);
        }
        else if (data > node.data) {
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
    inOrderTraversal(node = this._root) {
        // left, root, right
        if (node) {
            if (node.left) {
                this.inOrderTraversal(node.left);
            }
            console.log(node.data);
            if (node.right) {
                this.inOrderTraversal(node.right);
            }
        }
    }
}
var bst = new BinarySearchTree();
bst.insert(5);
bst.insert(25);
bst.insert(40);
bst.insert(30);
bst.insert(10);
bst.insert(35);
bst.insert(20);
bst.insert(15);
bst.insert(1);
bst.insert(-10);
bst.inOrderTraversal();
//# sourceMappingURL=binaryTree.js.map