class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
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

    unshift(val) {
        if (!this.head) {
            this.head = new Node(val);
            this.tail = head;
        } else {
            this.head = new Node(val, this.head);
        }
        this.length++
        return this;
    }

    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val)
    //         current = current.next;
    //     }
    // }

    // pop()
    // if there are no nodes in the list return undefined
    // loop through list until tail
    // set the next property on the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    pop() {
        let current = this.head;

        if(this.length < 1) return undefined;

        for (let i = 0; i < this.length - 2; i++) {
            current = current.next;
        }
        let last = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        return last;
    }
}


let list = new SinglyLinkedList();
list.push('one')
list.push('two')
list.push('three')
list.push('four')
// console.log(list)
console.log(list.pop())

