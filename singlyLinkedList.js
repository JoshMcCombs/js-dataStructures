// class Node {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) this.unshift(val);
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         let node = this.head;
//         let prev;
//         if (!this.head) return undefined;
//         while (node.next) {
//             prev = node;
//             node = node.next;
//         }
//         prev.next = null;
//         this.length--;
//         return node;
//     }

//     shift() {
//         if (!this.head) return undefined;
//         else {
//             let node = this.head;
//             this.head = node.next;
//             this.length--;
//             return node.val;
//         }
//     }

//     unshift(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else {
//             this.head = new Node(val, this.head);
//             this.length++;
//         }
//         return this;
//     }

//     get(index) {
//         let node = this.head;
//         if (index >= this.length || index < 0) return undefined;
//         else {
//             for (let i = 0; i < index; i++) {
//                 node = node.next;
//             }
//             return node.val;
//         }
//     }

//     remove(index) {
//         let current = this.head;
//         let prev;
//         if (index >= this.length || index < 0) return undefined;
//         else if (index === 0) return this.shift();
//         else if (index === this.length) return this.pop();
//         else {
//             for (let i = 0; i < index; i++) {
//                 prev = current;
//                 current = current.next;
//             }
//             prev.next = current.next;
//             this.length--;
//             return current;
//         }
//     }

//     insert(idx, val) {
//         let node = this.head;
//         let prev;
//         if(idx > this.length || idx < 0) return undefined;
//         else if (idx === 0) this.unshift(val);
//         else if (idx === this.length) return this.push(val);
//         else {
//             for (let i = 0; i < idx; i++) {
//                 prev = node;
//                 node = node.next
//             }
//             node = new Node(val, node);
//             prev.next = node;
//             return this;
//         }
        
//     }

//     reverse() {
//         let node = this.head;
//         let prev = null;
//         let next;
//         // if (this.length < 2) return this;
//         [this.head, this.tail] = [this.tail, this.head];
//         for (let i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//     }

//     print() {
//         let node = this.head;
//         let arr = [];
//         while (node) {
//             arr.push(node.val);
//             node = node.next;
//         }
//         console.log(arr);
//         return arr;
//     }
// }

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(this.length < 1) return undefined;
        let [node, prev] = [this.head, null];
        for (let i = 0; i < this.length - 1; i++) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        return node.value;
    }
    shift() {
        if (this.length < 1) return undefined;
        let node = this.head;
        this.head = node.next;
        this.length--;
        return node.value;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head = new Node(value, this.head);
        }
        this.length++;
        return true;

    }
    delete(index) {
        let [node, prev] = [this.head, null];
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        for (let i = 0; i < index; i++) {
            prev = node;
            node = node.next;
        }
        prev.next = node.next;
        this.length--;
        return node.value;
    }
    get(index) {
        let node = this.head;
        if (index < 0 || index > this.length - 1) return undefined;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node.value;
    }
    insert(index, value) {
        let [node, prev] = [this.head, null];
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        for (let i = 0; i < index; i++) {
            // TODO: Finish loop, update node to node.next
            // create new node(val, node), set prev.next to new node
            prev = node;
            node = node.next;
        }
        prev.next = new Node(value, node);
        this.length++;
        return true;
    }
    reverse() {
        if (this.length < 2) return this;
        let node = this.head;
        let prev, temp = null;
        [this.head, this.tail] = [this.tail, this.head];
        for (let i = 0; i < this.length; i++) {
            temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        return this;
    }
    printAsArray() {
        let node = this.head;
        const items = [];
        for (let i = 0; i < this.length; i++) {
            items.push(node.value);
            node = node.next;
        }
        return items;
    }
}

let sList = new SinglyLinkedList();
// sList.push('zero')
// sList.push('one')
// sList.push('two')
// sList.push('three')
// sList.push('four')
// sList.push('five')
// sList.push('six')
// sList.insert(4, 'insert')
// sList.reverse();
// sList.unshift('three')
// sList.unshift('two')
// sList.unshift('one')
// sList.unshift('zero')


