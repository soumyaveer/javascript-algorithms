function Stack(){
  let items = [];

  //adds new item at the top of the stack
  this.push = function(element){
    items.push(element)
  };

  //removes element from the top of the stack
  this.pop = function(){
    return items.pop();
  };

  // returns top element from the stack
  this.peek = function(){
    return items[items.length - 1];
  };

  // returns true if stack does not contain any elements
  this.isEmpty = function(){
    return items.length === 0;
  };

  // removes all elements from the stack
  this.clear = function(){
    items = [];
  };

  // returns the number of elements that stack contains
  this.size = function(){
    return items.length;
  }
  
}