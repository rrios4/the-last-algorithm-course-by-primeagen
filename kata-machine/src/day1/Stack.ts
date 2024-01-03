type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        // Initiate a node with value using the node type
        const node = {value: item} as Node<T>
        // Add 1 length too track the length of the stack.
        this.length++
        // If head does not exist create a new head and return it
        if(!this.head) {
            this.head = node;
            return;
        }
        
        node.prev = this.head;
        this.head = node;
         

    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if(this.length === 0) {
            const head = this.head
            this.head = undefined
            return head?.value;
        }
        const head = this.head as Node<T>;
        this.head = head.prev;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}