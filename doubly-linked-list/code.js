// Class Node đại diện cho từng node trong doubly-linked-list
class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    Push(val){
        if (this.length == 0) {
            let newNode = new Node(val)
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }

        let newNode = new Node(val)
        let currentLastNode = this.tail
        currentLastNode.next = newNode
        newNode.previous = currentLastNode
        this.tail = newNode
        this.length++
        return this
    }

    Pop(){
        if (this.length == 0) {
            return undefined
        }

        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
            return this
        }

        let currentLastNode = this.tail
        let newLastNode = currentLastNode.previous
        newLastNode.next = null
        this.tail = newLastNode
        this.length--
        currentLastNode.previous = null
        return this
    }
}

let newDoublyLinkedList = new DoublyLinkedList()
newDoublyLinkedList.Push(1)
newDoublyLinkedList.Push(2)
newDoublyLinkedList.Push(3)
newDoublyLinkedList.Push(4)
newDoublyLinkedList.Pop()
newDoublyLinkedList.Pop()
newDoublyLinkedList.Pop()
newDoublyLinkedList.Pop()
newDoublyLinkedList.Pop()
console.log(newDoublyLinkedList)