class Node {
    constructor(value,
                next = null,
                previous = null
                ) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push(value) {
    //     if (!this.head) {
    //         this.head = new Node(value);
    //         this.tail = this.head;
    //     } else {
    //         this.tail.next = new Node(value, null, this.tail);
    //         this.tail = this.tail.next;
    //     }
    //     this.length++;
    //     return this;
    // }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let node = this.tail;
        node.previous.next = null;
        this.tail = node.previous;
        this.length--;
        return node.value;
    }
    unshift(value) {
        if (this.length < 1) return this.push(value);
        this.head = new Node(value, this.head, null);
        this.length++;
        return true;
    }
    shift() {
        if (this.length < 1) return undefined;
        let node = this.head;
        this.head = node.next;
        node.next.previous = null;
        this.length--;
        return node.value;
    }
    get(index) {
        if (!this.head || index < 0 || index > this.length - 1) return undefined;
        else if (index > this.length / 2) {
            let node= this.tail;
            index = this.length - index;
            for (let i = 0; i < index - 1; i++) {
                node = node.previous;
            }
            return node.value;
        } else {
            let node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node.value;
        }
    }
    insert(index, value) {
        if (index > this.length - 1 || index < 0) return undefined;
        else if (index === 0) return this.unshift(value);
        else if (index === this.length) return this.push(value);
        // TODO: Either simplify or get rid of optimization
        else if (index > this.length / 2) {
            let [node, prev]= [this.tail, null];
            index = this.length - index;
            for (let i = 0; i < index; i++) {
                prev = node;
                node = node.previous;
            }
            node = new Node(value, node, prev);
            prev.next = node;
        } else {
            let [node, prev]= [this.head, null];
            for (let i = 0; i < index; i++) {
                prev = node;
                node = node.next;
            }
            node = new Node(value, node, prev);
            prev.next = node;
        }
        this.length++
        return this;
    }
    remove(index) {
        let [node, prev] = [this.head, null];
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        for (let i = 0; i < index; i++) {
            prev = node;
            node = node.next;
        }
        node.next.prev = prev;
        prev.next = node.next;
        this.length--;
        return node.value;
    }
    toList(...items) {
        for (let item of items) {
            this.push(item)
        }
        return this;
    }
    print() {
        if (!this.head) return undefined;
        const items = [];
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            items.push(node.value);
            node = node.next;
        }
        return items;
    }
}

let dList = new DoublyLinkedList;
dList.toList('zero', 'one', 'two', 'three')
