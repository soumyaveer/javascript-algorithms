const Node = require('../../../src/containers/linked-lists/Node');

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  //adds new item at the end of the list
  append(element){
    let currentNode;
    let previousNode;
    let node = new Node(element);

    // Case 1: If list is empty, i.e. head has no element append node as head
    if (this.head === null){
      this.head = node;
      return ;
    } else {
      currentNode = this.head;
    }

    // Case 2: If list has elements, we want to add the node at the end of the list
    while(currentNode.next){
      previousNode = currentNode.previous;
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    currentNode.previous = previousNode;
  }

  // returns the index of element in the list
  indexOf(element){
    let index = 0;
    let indexOfElement = -1;
    let currentNode = this.head;

    // Case 1: When list is empty, element is not found
    if (this.head === null){
      return -1;
    }

    // Case 2: When list is not empty. search for the index of element
    while(currentNode){
      if(currentNode.element === element){
        indexOfElement = index;
      }
      index += 1;
      currentNode = currentNode.next;
    }

    return indexOfElement;
  }

  // inserts the element at specified position
  insert(position, element){
    let index = 0;
    let node = new Node(element);

    // Case 1: When element has to be inserted at head position
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let currentNode = this.head;

    // Case 2: When element has to be inserted in between the list or at the end of the list
    while(currentNode){
      if((index + 1) === position){
        node.previous = currentNode;
        node.next = currentNode.next;
        currentNode.next = node;
      }
      index += 1;
      currentNode = currentNode.next;
    }
  }

  // returns true if LinkedList is empty, returns false if LinkedList has elements
  isEmpty(){
    let size = this.size();
    return  size === 0;
  }

  //remove deletes node from the list
  remove(element){
    let currentNode = this.head;
    let previousNode = this.head.previous;

    // Case 1: When element has to be removed from the head position in the list
    if (this.head.element === element){
      currentNode = currentNode.next;
      this.head = currentNode;
      return;
    }

    // Case 2: When Element has to be removed from in between or the last position in the list
    while(currentNode){
      if(currentNode.element === element){
        previousNode.next = currentNode.next;
        if(currentNode.next) {
          currentNode.next.previous = previousNode;
        }
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // removes an element from specified position in the list
  removeAt(position){
    let index = 0;
    let currentNode = this.head;
    let previousNode;

    // Case 1: When element has to be removed from head position
    if (position === 0){
      this.head = currentNode.next;
      return;
    }

    // Case 2: When element has to be removed from positions in between or the last position in the list
    previousNode = this.head;

    while(currentNode){
      if (index === position){
        previousNode.next = currentNode.next;
        if(currentNode.next) {
          currentNode.next.previous = previousNode;
        }
      }
      index += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // size return number of elements in the list
  size() {
    let currentNode;
    let size = 0;

    // Case 1: When the list is empty, return size as 0
    if (this.head === null) {
      return 0;
    } else {
      currentNode = this.head;


      // Case 2: When the list is not empty, find the size of the list
      while (currentNode) {
        currentNode = currentNode.next;
        size += 1;
      }

      return size;
    }
  }
}

module.exports = DoublyLinkedList;