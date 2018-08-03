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
  
}