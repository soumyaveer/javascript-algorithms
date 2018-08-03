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

}