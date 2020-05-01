class Node {
    constructor(val){
        this.val = val
        this.before = null
    }
}

class Stack {
    constructor(){
        this.head = null
        this.length = 0
    }

    Push(val){
        let newNode = new Node(val)
        if (this.length == 0) {
            this.head = newNode
            this.length++
            return this
        }
        let currentHead = this.head
        newNode.before = currentHead
        this.head = newNode
        this.length++
        return this
    }

    Pop(){
        if (this.length == 0) {
            return null
        }

        if (this.length == 1) {
            this.head = null
            this.length--
            return this
        }

        let currentHead = this.head
        let newHead = currentHead.before
        this.head = newHead
        currentHead.before = null
        this.length--
        return this
    }
}

let stack = new Stack()
stack.Push(1)
stack.Push(2)
stack.Push(3)
stack.Push(4)
stack.Pop()
stack.Pop()
stack.Push(6)
stack.Push(5)
console.log(stack)
