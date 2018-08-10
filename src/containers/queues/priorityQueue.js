class PriorityQueue{
  constructor(){
    this.items = [];
  }

  QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }

}
module.exports = PriorityQueue;