class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        let previousNode;
        let node = this.head;
        if (this.length < 1) return undefined;
        while (node) {
            previousNode = node;
            node = node.next;
        }
        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
        return node;
    }

    print() {
        let node = this.head;
        let arr = [];
        while (node.next) {
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }
}

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

let list = new SinglyLinkedList();
list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.push('five')
list.push('six')
// list.pop()
console.log(list.print())
// list.remove(1)
// console.log(list)


// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     // traverse() {
//     //     let current = this.head;
//     //     while (current) {
//     //         console.log(current.val)
//     //         current = current.next;
//     //     }
//     // }

//     // pop()
//     // if there are no nodes in the list return undefined
//     // loop through list until tail
//     // set the next property on the 2nd to last node to be null
//     // set the tail to be the 2nd to last node
//     pop() {
//         let current = this.head;

//         if(this.length < 1) return undefined;

//         for (let i = 0; i < this.length - 2; i++) {
//             current = current.next;
//         }
//         let last = current.next;
//         current.next = null;
//         this.tail = current;
//         this.length--;
//         return last;
//     }

//     // shift()
//     // If there are no nodes return undefined
//     // store the current head in a variable
//     // Set the head property to be the current heads next property
//     // Decrement length and return the removed item

//     shift() {
//         if (this.length < 1) return undefined;
//         let item = this.head.val;
//         let nextItem = this.head.next;
//         this.head = nextItem;
//         this.length--;
//         return item;
//     }

//     // unshift()
//     // Accept a value, create a node to point
//     // to the rest of list return list
//     unshift(val) {
//         if (!this.head) {
//             this.head = new Node(val);
//             this.tail = head;
//         } else {
//             this.head = new Node(val, this.head);
//         }
//         this.length++
//         return this;
//     }

//     // get()
//     // accept an argument return null if arg > length
//     // traverse list for arg items and return value

//     get(num) {
//         let current = this.head;
//         if (num >= this.length || num < 0) return null;
//         for (let i = 0; i < num; i++) {
//             current = current.next;
//         }
//         return current;
//     }

//     // set()
//     // accept two args and return null if position arg > len || < 0
//     // go to position update val

//     set(indx, val) {
//         let foundNode = this.get(indx);
//         if (foundNode) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }

//     // insert()
//     // if the index is < 0 or > than length return false
//     // if index == length use push, if index == 0 use unshift
//     // call get index - 1, set next to newly created node
//     // set new node to old next, increment length;
//     // return true

//     insert(indx, val) {
//         if (indx < 0 || indx > this.length) return false;
//         else if (indx === this.length) this.push(val);
//         else if (indx === 0) this.unshift(val);
//         else {
//             let afterNode = this.get(indx);
//             let preNode = this.get(indx - 1);
//             let newNode = new Node(val, afterNode);
//             preNode.next = newNode;
//         }
//         this.length++;
//         return true;
//     }

//     // remove()
//     // takes an index and removes the value at that index
//     // if index < length return false or null or undefined
//     // traverse list set pre node next to post node, return true
//     remove(indx) {
//         if (indx < 0 || indx >= this.length) return undefined;
//         else if (indx === this.length) return this.pop();
//         else if (indx === 0) return this.shift();
//         else {
//             let preNode = this.get(indx -1);
//             let removed = preNode.next;
//             let postNode = removed.next;
//             preNode.next = postNode;
//             this.length--;
//             return removed;
//         }
//     }

//     // reverse()
//     // Swap head and tail, create variables next and previous
//     // Create a variable called node/current and initialize it to start at the head property
//     // loop through the list, set  next to be the next property on whatever node is
//     // set the next property on the node to be whatever prev is
//     // set prev to be the value of the node variable

//     reverse() {
//         let Node = this.head;
//         let previous = null;
//         let next;

//         [this.head, this.tail] = [this.tail, this.head];

//         for (let i = 0; i < this.length; i++) {
//             next = node.next;
//             Node.next = previous;
//             previous = node;
//             Node = next;
//         }
//         return this;
//     }
//     // ['one', 'two', 'three', 'four', 'five', 'six']
// }
