const Node = require('../../../src/containers/linked-lists/Node');

class SinglyLinkedList{
  constructor(){
    this.head = null;
  }

  //adds new item at the end of the list
  append(element){
    let currentNode;
    let node = new Node(element);

    if (this.head === null){
       return this.head = node;
    } else {
      currentNode = this.head;
    }

    while(currentNode.next){
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  // size return number of elements in the list
  size(){
    let currentNode;
    let length = 0;

    if (this.head === null){
      return length;
    } else {
      currentNode = this.head;
    }

    while(currentNode){
      currentNode = currentNode.next;
      length += 1;
    }

    return length;
  }

  //remove deletes node from the list
  remove(elementToBeDeleted){
    let currentNode = this.head;
    let previousNode = this.head;
    let length = this.size();

    while(currentNode.next){
      if(currentNode.element === elementToBeDeleted){
        previousNode.next = currentNode.next;
        length -= 1;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // returns the index of element in the list
  indexOf(element){
    let index = 0;
    let indexOfElement = -1;
    let currentNode = this.head;

    if (currentNode === null){
      return -1;
    }

    while(currentNode.next){
      index += 1;
      if(currentNode.element === element){
        indexOfElement = index;
      }
      currentNode = currentNode.next;
    }

    return indexOfElement;
  }

}

module.exports = SinglyLinkedList;