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
        currentLastNode.previous = null
        this.tail = newLastNode
        this.length--
        return this
    }

    Shift(){
        if (this.length == 0) {
            return undefined
        }

        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
            return this
        }

        let currentHeadNode = this.head
        let newHeadNode = currentHeadNode.next
        newHeadNode.previous = null
        currentHeadNode.next = null
        this.head = newHeadNode
        this.length--
        return this
    }

    Unshift(val){
        let newNode = new Node(val)

        if (this.length == 0){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }

        let currentHead = this.head
        newNode.next = currentHead
        currentHead.previous = newNode
        this.head = newNode
        this.length++
        return this
    }

    Get(index){
        if (index < 0 || index >= this.length) {
            return null
        }

        if (index == 0) {
            return this.head
        }

        if (index == this.length - 1) {
            return this.tail
        }

        let median = this.length / 2
        let counter;
        let result;

        if (index < median) {
            counter = 0
            result = this.head
            while(counter != index) {
                result = result.next
                counter++
            }
        } else {
            counter = this.length - 1
            result = this.tail
            while(counter != index) {
                result = result.previous
                counter--
            }
        }

        return result
    }
}

let newDoublyLinkedList = new DoublyLinkedList()
newDoublyLinkedList.Push(1)
newDoublyLinkedList.Push(2)
newDoublyLinkedList.Push(3)
newDoublyLinkedList.Push(4)
newDoublyLinkedList.Push(5)
// newDoublyLinkedList.Pop()
// newDoublyLinkedList.Shift()
// newDoublyLinkedList.Shift()
// newDoublyLinkedList.Unshift(6)
// newDoublyLinkedList.Unshift(7)
console.log(newDoublyLinkedList.Get(4))