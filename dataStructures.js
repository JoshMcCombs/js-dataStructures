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
        if (!this.head) this.unshift(val);
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let node = this.head;
        let prev;
        if (!this.head) return undefined;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
        this.length--;
        return node;
    }

    shift() {
        if (!this.head) return undefined;
        else {
            let node = this.head;
            this.head = node.next;
            this.length--;
            return node.val;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head = new Node(val, this.head);
            this.length++;
        }
        return this;
    }

    get(index) {
        let node = this.head;
        if (index >= this.length || index < 0) return undefined;
        else {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node.val;
        }
    }

    remove(index) {
        let current = this.head;
        let prev;
        if (index >= this.length || index < 0) return undefined;
        else if (index === 0) return this.shift();
        else if (index === this.length) return this.pop();
        else {
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            this.length--;
            return current;
        }
    }

    insert(idx, val) {
        let node = this.head;
        let prev;
        if(idx > this.length || idx < 0) return undefined;
        else if (idx === 0) this.unshift(val);
        else if (idx === this.length) return this.push(val);
        else {
            for (let i = 0; i < idx; i++) {
                prev = node;
                node = node.next
            }
            node = new Node(val, node);
            prev.next = node;
            return this;
        }
        
    }

    reverse() {
        let node = this.head;
        let prev = null;
        let next;
        // if (this.length < 2) return this;
        [this.head, this.tail] = [this.tail, this.head];
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }

    print() {
        let node = this.head;
        let arr = [];
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
        console.log(arr);
        return arr;
    }
}

let list = new SinglyLinkedList();
list.push('zero')
list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.push('five')
list.push('six')
list.reverse();
// list.unshift('three')
// list.unshift('two')
// list.unshift('one')
// list.unshift('zero')
list.print()

