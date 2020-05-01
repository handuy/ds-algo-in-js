class Node {
    constructor(val){
        this.val = val
        this.before = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    EnQueue(val){
        let newNode = new Node(val)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        let currentTail = this.tail
        currentTail.before = newNode
        this.tail = newNode
        this.length++
        return this
    }

    DeQueue(){
        if (this.length == 0) {
            return null
        }

        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
            return this
        }

        let removedNode = this.head
        let newHead = removedNode.before
        this.head = newHead
        removedNode.before = null
        this.length--
        return this
    }

}

let queue = new Queue()
queue.EnQueue(1)
queue.EnQueue(2)
queue.EnQueue(3)
queue.EnQueue(4)
queue.DeQueue()
queue.DeQueue()
queue.EnQueue(5)
queue.EnQueue(6)
queue.DeQueue()
console.log(queue)