// Class Node đại diện cho từng node trong singly-linked-list
class Node {
    constructor(val){
        this.val = val
        this.pointer = null
    }
}

// Tạo Singly-linked-list theo cách bình dân
// let firstNode = new Node("hello")
// firstNode.pointer = new Node("how")
// firstNode.pointer.pointer = new Node("are")
// firstNode.pointer.pointer.pointer = new Node("you")
// firstNode.pointer.pointer.pointer.pointer = new Node("I'm")
// firstNode.pointer.pointer.pointer.pointer.pointer = new Node("fine")
// console.log(firstNode)

// Tạo Singly-linked-list theo cách cao cấp

class SinglyLinkedList {
    // Khởi tạo list: head và tail trỏ vào hư vô :v
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Method Push(val): Đẩy một Node vào cuối list
    // B1: Tạo Node với val truyền vào
    // B2: Kiểm tra độ dài list
    // B3: Nếu độ dài list = 0 --> list chưa có node nào --> head và tail đều trỏ vào node mới, set length = 1
    // B4: Nếu độ dài list <> 0 --> list đã có node:
    // B4.1: Lấy node ở vị trí tail, cập nhật pointer trỏ sang node mới
    // B4.2: Cập nhật tail của list, trỏ sang node mới
    // B4.3: Cập nhật length của list
    Push(val){
        let newNode = new Node(val)
        let listLength = this.length

        if ( listLength == 0 ) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }

        if (listLength > 0) {
            let currentTailNode = this.tail
            currentTailNode.pointer = newNode
            this.tail = newNode
            this.length++
            return this
        }
    }

    // Method Pop(): Gỡ Node cuối cùng ra khỏi List, cập nhật tail
    // B1: Kiểm tra độ dài list
    // B1.1: length = 0 --> list chưa có gì --> return null
    // B1.2: length = 1 --> cập nhật head, tail = null, length = 0
    // B1.3: length > 1
    // B2: Phải lấy ra được node áp chót, là node có pointer trỏ đến node cuối cùng
    Pop(){
        if (this.length == 0) {
            return null
        }

        if (this.length == 1) {
            let lastNode = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return lastNode
        }

        // Bắt đầu từ node đầu tiên (currentNode)
        // Tiến hành lấy node ngay sau node đầu (nextNode)
        // Sau đó lại lấy node ngay sau nextNode: nextNodeOfNextNode
        // Nếu nextNodeOfNextNode = null thì chứng tỏ currentNode là node áp chót
        // Còn nếu nextNodeOfNextNode != null thì cập nhật currentNode = node tiếp theo
        // Do phải dò từng node một nên là độ phức tạp thuật toán là O(n)
        let currentNode = this.head
        while(true) {
            let nextNode = currentNode.pointer
            let nextNodeOfNextNode = nextNode.pointer
            if (nextNodeOfNextNode == null) {
                currentNode.pointer = null
                this.tail = currentNode
                this.length--
                return nextNode
            }
            currentNode = currentNode.pointer
        }
    }

    Shift(){
        let currentHead

        if (this.length == 0) {
            return null
        }

        if (this.length == 1) {
            currentHead = this.head
            this.head = null
            this.tail = null
            this.length--
            return currentHead
        }

        currentHead = this.head
        let newHead = currentHead.pointer

        this.head = newHead
        this.length--

        return currentHead
    }

    Unshift(val){
        let newNode = new Node(val)
        let currentHead = this.head

        newNode.pointer = currentHead
        this.head = newNode
        if (currentHead == null) {
            this.tail = newNode
        }
        this.length++
    }

    Get(index){
        if (index < 0 || index >= this.length) {
            return null
        }

        let count = 0
        let result = this.head
        while(count < index){
            result = result.pointer
            count++
        }
        return result
    }

    Set(index, val){
        let foundNode = this.Get(index)
        if (foundNode == null) {
            return null
        }

        foundNode.val = val
    }

    Insert(index, val){
        if (index < 0 || index > this.length){
            return false
        }

        if (index == 0) {
            this.Unshift(val)
            return this
        }

        if (index == this.length) {
            this.Push(val)
            return this
        }

        let newNode = new Node(val)
        let nodeAtIndex = this.Get(index)
        let nodeAtPreviousIndex = this.Get(index-1)

        nodeAtPreviousIndex.pointer = newNode
        newNode.pointer = nodeAtIndex
        this.length++
        return this
    }

    Remove(index){
        if (index < 0 || index >= this.length){
            return false
        }

        if (index == 0) {
            this.Shift()
            return this
        }

        if (index == length -1) {
            this.Pop()
            return this
        }

        let nodeAtIndex = this.Get(index)
        let nodeBefore = this.Get(index-1)
        let nodeAfter = this.Get(index+1)

        nodeBefore.pointer = nodeAfter
        nodeAtIndex.pointer = null
        this.length--
        return this
    }

    Reverse(){
        if (this.length <= 1) {
            return this
        }

        let previousNode = this.Get(0)
        let currentNode = this.Get(1)
        let oldNextNode

        previousNode.pointer = null
        this.tail = previousNode
        while(true){
            oldNextNode = currentNode.pointer
            currentNode.pointer = previousNode

            if (oldNextNode == null) {
                this.head = currentNode
                return this
            }

            if (oldNextNode.pointer == null) {
                oldNextNode.pointer = currentNode
                this.head = oldNextNode
                return this
            }

            previousNode = currentNode
            currentNode = oldNextNode
        }
    }
}

let newSinglyLinkedList = new SinglyLinkedList()
newSinglyLinkedList.Push(1)
newSinglyLinkedList.Push(2)
newSinglyLinkedList.Push(3)
newSinglyLinkedList.Push(4)
// console.log( newSinglyLinkedList.Pop() )
// console.log( newSinglyLinkedList.Pop() )
// console.log( newSinglyLinkedList.Shift() )
// console.log( newSinglyLinkedList.Shift() )
// console.log( newSinglyLinkedList.Shift() )
// console.log( newSinglyLinkedList.Shift() )
// console.log( newSinglyLinkedList.Unshift(5) )
// console.log( newSinglyLinkedList.Unshift(6) )
// console.log(newSinglyLinkedList.Remove(1))
console.log(newSinglyLinkedList.Reverse())
// console.log(newSinglyLinkedList)