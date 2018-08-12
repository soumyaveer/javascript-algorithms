const Node = require('../../../src/containers/linked-lists/Node');

class SinglyLinkedList{
  constructor(element){
    this.node = new Node(element);
    this.head = this.node;
    this.length = 1;
  }

  //adds new item at the end of the list
  append(element){
    let current;
    let node = new Node(element);

    if (this.head === null){
      current = node;
    } else {
      current = this.head;
    }

    while(current.next){
      current = current.next;
    }

    current.next = node;

    this.length++;
  }

  // size return number of elements in the list
  size(){
    let current;

    if (this.head === null){
       this.length = 0;
    } else {
      current = this.head;
    }

    while(current.next){
      current = current.next;
    }

    return this.length++;
  }
}

module.exports = SinglyLinkedList;