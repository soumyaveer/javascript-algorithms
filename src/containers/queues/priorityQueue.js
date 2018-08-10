class PriorityQueue{
  constructor(){
    this.items = [];
  }

  QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }

  enqueue(element, priority){
    let queueElement = new this.QueueElement(element, priority);
    let added = false;

    for(let i = 0; i < this.items.length - 1; i++){
      if(queueElement.priority < this,items[i].priority){
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added){
      this,items.push(queueElement);
    }
  };


}
module.exports = PriorityQueue;