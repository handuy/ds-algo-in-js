class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    Insert(val){
        let newNode = new Node(val)
        if (this.root == null) {
            this.root = newNode
            return this
        }

        let comparedNode = this.root
        while(true) {
            if (val == comparedNode.value) {
                return this
            } else if (val > comparedNode.value) {
                if (comparedNode.right == null) {
                    comparedNode.right = newNode
                    return this
                }
                comparedNode = comparedNode.right
            } else {
                if (comparedNode.left == null) {
                    comparedNode.left = newNode
                    return this
                }
                comparedNode = comparedNode.left
            }
        }
    }
}

let newBST = new BST()
newBST.Insert(6)
newBST.Insert(6)
newBST.Insert(8)
newBST.Insert(8)
newBST.Insert(4)
newBST.Insert(3)
newBST.Insert(9)
newBST.Insert(5)
newBST.Insert(7)
newBST.Insert(10)
newBST.Insert(2)
console.log(newBST)