class Queue {
  constructor(){
    this.items = []
  }

  //adds a new item at the back of the queue
  enqueue(element) {
    this.items.push(element)
  }

  front(){
    return this.items[0]
  }

}

module.exports = Queue;