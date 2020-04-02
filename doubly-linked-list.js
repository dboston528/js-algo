//create a class for the node. The node is what holds the value, and points to the next node if applicable.
class Node {
    constructor(){
        this.value = value;
        this.prev= null;
        this.next = null;
    }
}

//This is the actual structure for the linked list. Technically this structure consist of nothing but head and a tail.
//The rest of the nodes are sort nested within the first node/head, and the last node is considered the tail. 
//You will also create all of your methods here.
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
}
