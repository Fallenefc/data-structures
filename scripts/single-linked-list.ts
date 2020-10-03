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
    return true;
  }

  addToHead (node: LinkedListNode) {
    let oldHead = this.head;
    this.head = node;
    this.head.next = oldHead;
    return true;
  }

  removeHead () {
    let removedHead = this.head;
    this.head = removedHead.next;
    return removedHead;
  }

  contains (value) {
    let currentSearchedValue = this.head;

    while (currentSearchedValue) {
      if (currentSearchedValue.value === value) {
        return true;
      }
      currentSearchedValue = currentSearchedValue.next;
    }

    return false;
  }
}

// const linkedList = new SingleLinkedList(new LinkedListNode(10));
// linkedList.addToTail(new LinkedListNode(50))
// linkedList.addToTail(new LinkedListNode(20))
// linkedList.addToTail(new LinkedListNode(10))
// linkedList.addToTail(new LinkedListNode(5))
// linkedList.addToTail(new LinkedListNode(42))
// console.log(linkedList.contains(500))

// console.log(linkedList)
