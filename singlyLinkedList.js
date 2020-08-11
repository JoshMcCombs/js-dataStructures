class SingleLinkNode {
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
        const newNode = new SingleLinkNode(value);
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
        const newNode = new SingleLinkNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head = new SingleLinkNode(value, this.head);
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
            prev = node;
            node = node.next;
        }
        prev.next = new SingleLinkNode(value, node);
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
    toList(...items) {
        for (let item of items) {
            this.push(item);
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
