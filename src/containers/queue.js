class Queue {
  constructor(){
    this.items = []
  }

  //adds a new item at the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // returns first element of the queue
  front(){
    return this.items[0];
  }

  //removes first element from the queue
  dequeue(){
    return this.items.shift();
  }

  //returns the number of elements in the queue
  size(){
    return this.items.length;
  }

  //returns true is queue has no elements otherwise false
  isEmpty(){
    return this.items.length === 0;
  }

  //clears the queue and returns an empty queue
  clear(){
    this.items = [];
  }
}

module.exports = Queue;