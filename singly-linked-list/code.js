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
}

let newSinglyLinkedList = new SinglyLinkedList()
newSinglyLinkedList.Push(1)
newSinglyLinkedList.Push(2)
newSinglyLinkedList.Push(3)
newSinglyLinkedList.Push(4)
console.log( newSinglyLinkedList.Pop() )
console.log( newSinglyLinkedList.Pop() )
console.log( newSinglyLinkedList.Pop() )
console.log( newSinglyLinkedList.Pop() )
console.log(newSinglyLinkedList)