class Stack {
  constructor(){
     this.items = [];
  }

  //adds new item at the top of the stack
  push(element){
    this.items.push(element)
  };

  //removes element from the top of the stack
  pop(){
    return this.items.pop();
  };

  // returns top element from the stack
  peek(){
    return this.items[this.items.length - 1];
  };

  // returns true if stack does not contain any elements
  isEmpty(){
    return this.items.length === 0;
  };

  // removes all elements from the stack
  clear(){
    this.items = [];
  };

  // returns the number of elements that stack contains
  size(){
    return this.items.length;
  };

  // prints the items in the stack
  print(){
    console.log(this.items.toString());
  };
}

module.exports = Stack;