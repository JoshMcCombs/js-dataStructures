class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        let node = this.root;
        if (!this.root) {
            this.root = newNode;
        } else {
            while (true) {
                if (value === node.value) return undefined;
                else if (value < node.value) {
                    if (!node.left) {
                        node.left = newNode;
                        return this;
                    }
                    node = node.left;
                }
                else {
                    if (!node.right) {
                        node.right = newNode;
                        return this;
                    }
                    node = node.right;
                }
            }
        }
    }
    has(value) {
        let node = this.root;
        if (typeof(value) !== typeof(node.value)) return 'Invalid input';
        while(true) {
            if (value === node.value) return true;
            if (value < node.value) {
                if (!node.left) return false;
                node = node.left;
            }
            else if (value > node.value) {
                if (!node.right) return false;
                node = node.right;
            }
        }
    }
    toTree(...items) {
        for (let item of items) {
            this.insert(item);
        }
        return this;
    }
}

//      10
//    8    15
//   6 9  13 16

let bst = new BST();
bst.toTree(10,8,15,6,9,13,16);