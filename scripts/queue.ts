class Queue {

  length: number;
  placeholder: number;
  storage: object;

  constructor () {
    this.length = 0;
    this.placeholder = 0;
    this.storage = {};
  }

  enqueue (value: string) {
    this.storage[this.placeholder] = value;
    this.placeholder++;
    this.length++;
  }

  dequeue () {
    if (this.length > 0) {
      let toBeDequeued = this.storage[this.placeholder - this.length]
      delete this.storage[this.placeholder - this.length];
      this.length--;
      return toBeDequeued;
    }
    else {
      throw new Error('You cannot dequeue an empty queue')
    }
  }

  size () {
    return this.length;
  }
}

// const newQueue = new Queue();
// newQueue.enqueue('doggo');
// newQueue.enqueue('catto');
// newQueue.enqueue('fisho');
// newQueue.dequeue();
// newQueue.dequeue();


// console.log(newQueue.size());
// console.log(newQueue);
