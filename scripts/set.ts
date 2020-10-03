class newSet {
  storage: object;

  constructor () {
    this.storage = {};
  }

  add (value: string | number) {
    if (!this.storage.hasOwnProperty(value)) {
      this.storage[value] = value;
    }
    else {
      throw new Error (`This set already has a property with the value of ${value}`)
    }
  }

  contains (value: string | number) {
    if (this.storage.hasOwnProperty(value)) {
      return true
    }
    else {
      return false;
    }
  }

  remove (value: string | number) {
    if (this.storage.hasOwnProperty(value)) {
      delete this.storage[value];
      return true;
    }
    else {
      return false;
    }
  }
}

// let thisSet = new newSet();
// thisSet.add ('dog')
// thisSet.add ('doggo')
// thisSet.add ('cat')
// thisSet.add ('catto')
// thisSet.add ('fish')
// thisSet.remove('fish')
// console.log(thisSet.contains('doggo'))

// console.log(thisSet)