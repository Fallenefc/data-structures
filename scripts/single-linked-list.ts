// For now, this linked list just accept number as values;

class LinkedListNode {
  value: number;
  next: any;

  constructor (value: number) {
    this.value = value;
    this.next = null;
  }

}

class SingleLinkedList {
  head: any;
  tail: any;
  length: number;
  node: LinkedListNode;

  constructor (node) {
    this.head = node;
    this.tail = node;
    this.length = 0;
  }

  addToTail (node: LinkedListNode) {
    this.tail.next = node;
    this.tail = node;
  }
}

const linkedList = new SingleLinkedList(new LinkedListNode(10));
linkedList.addToTail(new LinkedListNode(50))

console.log(linkedList)
