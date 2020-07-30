class Node {
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

    // insert(value) {
    //     const newNode = new Node(value)
    //     if (!this.root) {
    //         this.root = newNode;
    //         return this;
    //     } else {
    //         let current = this.root;
    //         while (true) {
    //             if (value === current.value) return undefined;
    //             if (value < current.value) {
    //                 if (current.left === null) {
    //                     current.left = newNode;
    //                     return this;
    //                 } 
    //                 current = current.left;             
    //             } else if (value > current.value) {
    //                 if (current.right === null) {
    //                     current.right = newNode;
    //                     return this;
    //                 }
    //                 current = current.right;
    //             }
    //         }
    //     }
    // }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let node = this.root;
            while (true) {
                if (value === node.value) return undefined;
                else if (value < node.value) {
                    if (!node.left) {
                        node.left = newNode;
                        return this;
                    }
                    node = node.left;
                } else {
                    if (!node.right) {
                        node.right = newNode;
                        return this;
                    }
                    node = node.right;
                }

            }
        }
    }
    find(value) {
        let node = this.root;
        let bool = true;
        if (!this.root) return undefined;
        while (bool) {
            if (!node) return false;
            else if (node.value === value) return true;
            else if (value < node.value) {
                node = node.left;
            }
            else if (value > node.value) {
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