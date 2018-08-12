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
       this.head = node;
       return this.head;
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
      if(currentNode.element === element){
        indexOfElement = index;
      }
      index += 1;
      currentNode = currentNode.next;
    }

    return indexOfElement;
  }

  // removes an element from specified position in the list
  removeAt(position){
    let index = 0;
    let currentNode = this.head;
    let previousNode = this.head;
    let length = this.size();

    while(currentNode.next){
      if (index === position){
        previousNode.next = currentNode.next;
        length -= 1;
      }
      index += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // returns true if LinkedList is empty, returns false if LinkedList has elements
  isEmpty(){
    let length = this.size();
    return  length === 0;
  }

  // inserts the element at specified position
  insert(position, element){
    let index = 0;
    let node = new Node(element);

    if(position === 0){
      node.next = this.head;
      this.head = node;
    }
    let currentNode = this.head;

    while(currentNode.next){
      if((index + 1) === position){
        node.next = currentNode.next;
        currentNode.next = node;
      }
      index += 1;
      currentNode = currentNode.next;
    }
  }
}

module.exports = SinglyLinkedList;