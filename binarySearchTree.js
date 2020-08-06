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
        if (!this.root) this.root = newNode;
        else {
            let node = this.root;
            while (true) {
                if (node.value === value) return undefined;
                else if (value < node.value) {
                    if (node.left) node = node.left;
                    else {
                        node.left = newNode;
                        return this;
                    }
                } else {
                    if (node.right) node = node.right;
                    else {
                        node.right = newNode;
                        return this;
                    }
                }
            }
        }
    }
    has(value) {
        if (!this.root) return undefined;
        else if (typeof(value) !== typeof(this.root.value)) return 'Invalid Input';
        else {
            let node = this.root;
            while (true) {
                if (value === node.value) return true;
                else if (value < node.value) {
                    if (!node.left) return false;
                    else node = node.left;
                }
                else {
                    if (!node.right) return false;
                    else node = node.right;
                }
            }
        }
    }
    toTree(...items) {
        for (let item of items) {
            this.insert(item);
        }
        return this;
    }
    BFS() {
        if (!this.root) return undefined;
        const que = [],
              data = []
        let node;
        que.push(this.root);
        while (que.length) {
            node = que.shift();
            if (node.left) que.push(node.left);
            if (node.right) que.push(node.right);
            data.push(node.value);
        }
        return data;
    }
    // depth first search adding visited node first.
    DFSPreOrder() {
        const data = [];
        let traverse = (node) => {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    // depth first search adding visited node last.
    DFSPostOrder() {
        const data = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        const data = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let bst = new BST();
bst.toTree(10,8,15,6,9,13,16);

//      10
//    8    15
//   6 9  13 16
