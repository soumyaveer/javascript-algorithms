const Queue = require('./Queue');


class PriorityQueue extends Queue {

  enqueue(element, priority){
    let queueElement = { element: element, priority: priority };
    let added = false;

    for(let i = 0; i < this.items.length ; i++){
      if(queueElement["priority"] < this.items[i]["priority"]){
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added){
      this.items.push(queueElement);
    }
  };
}
module.exports = PriorityQueue;