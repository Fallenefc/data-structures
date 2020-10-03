class Tree {  
  value: number | string;
  children: Array<Tree>;

  constructor (value) {
    this.value = value;
    this.children = [];
  }

  addChild (value: string | number) {
    this.children.push(new Tree(value));
    return true;
  }

  contains (value: number | string) {
    if (value === this.value) return true;
    
    return this.children.some(el => {
      return el.contains(value);
    });
    
  }
}