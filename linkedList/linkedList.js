class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        if (this.head === null) {
            const newNode = new Node(value);
            this.head = newNode;
            this.size += 1;
        }
        else {
            const newNode = new Node(value);
            let nextNode = this.head;

            while (nextNode.next !== null) {
                nextNode = nextNode.next;
            }
            nextNode.next = newNode;
            this.size += 1;
        }
    }

    prepend(value) {
        if (this.head === null) {
            const newNode = new Node(value);
            this.head = newNode;
            this.size += 1;
        }
        else {
            const newNode = new Node(value);
            let previousHead = this.head;

            this.head = newNode;
            this.head.next = previousHead;
            this.size += 1;
        }
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        let tail = this.head;

        while (tail.next !== null) {
            tail = tail.next;
        }

        return tail;
    }

    at(index) {
        let nodeAt = this.head;

        if (index === 0) return this.head;

        for (let i = 1; i <= index; i++) {
            nodeAt = nodeAt.next;
        }
        return nodeAt;
    }

    pop() {
        let lastNode = this.head;
        let prevNode;
        while (lastNode.next !== null) {
            prevNode = lastNode
            lastNode = lastNode.next
        }
        prevNode.next = null;
        Object.setPrototypeOf(lastNode, null)
        this.size -= 1;
    }

    contains(value) {
        let node = this.head;
        while (node.next !== null) {
            if (node.data === value) {
                return true;
            }
            node = node.next;
        }
        if (node.data === value) {
            return true;
        }
        else {
            return false;
        }
    }

    find(value) {
        let node = this.head;
        let index = 0;

        while (node.next) {
            if (node.data === value) {
                return index;
            }
            node = node.next
            index++;
        }
        if (node.data === value) {
            return index;
        }

        return 'Value not found';
    }

    toString() {
        let finalString = `HEAD:( ${this.head.data} ) -> `;
        let node = this.head.next;

        while (node.next !== null) {
            finalString += `( ${node.data} ) -> `;

            node = node.next;
        }

        finalString += `TAIL:( ${this.tail().data} )`;

        return finalString;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);