class Dictionary{

  constructor(){
    this.items = {};
  }

  // returns the size of Dictionary
  size(){
    let size = 0;

    for(let key in this.items){
      if(this.items.hasOwnProperty(key)){
        ++size;
      }
    }
    return size;
  }

  // returns true if dictionary is empty
  isEmpty(){
    // returns isEmpty is true when size is 0 returns false for any other number
    return !this.size();
  }

  // adds a new item to the dictionary
  set(key, value){
    this.items[key] = value;
  }

  // returns an array of keys in the dictionary
  keys(){
    let keys = [];

    for(let key in this.items) {
      keys.push(key);
    }

    return keys;
  }

  //returns an array of values in the dictionary
  values(){
    let values = [];

    for(let key in this.items) {
      values.push(this.items[key]);
    }

    return values;
  }
}

module.exports = Dictionary;