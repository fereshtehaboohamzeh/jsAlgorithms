class LinkedList{
    constructor(data) {
        this.next= null;
        this.data = data;
    }
}

class LinkedNode{
    constructor(head = null) {
        this.head = head
    }

    size(){
        let count = 0
        let node = this.head;
        while(node){
            count ++;
            node = node.next;
        }
        return count
    }

    clear(){
        this.head = null
    }

    getLast() {
        let lastNode = this.head;

        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst(){
        return this.head
    }
}

export  {
    LinkedList,
    LinkedNode
}