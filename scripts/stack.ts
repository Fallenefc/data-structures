class Stack {

  length: number;
  storage: object;

  constructor () {
    this.length = 0;
    this.storage = {};
  }

  push (value: string) {
    this.storage[this.length] = value;
    this.length++;
    return true;
  }

  pop () {
    if (this.storage[this.length - 1]) {
      delete this.storage[this.length - 1]
      this.length--;
    }
    else {
      throw new Error ('You cannot pop from an empty stack')
    }
  }

  size () {
    return this.length;
  }
}

// const newStack = new Stack();
// newStack.push('dog');
// newStack.push('cat');
// newStack.push('fish');
// newStack.pop();
// newStack.pop();

// console.log(newStack)
// console.log(newStack.size());