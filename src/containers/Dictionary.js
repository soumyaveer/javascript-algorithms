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

  // returns true if the key is present in the dictionary else returns false
  has(key){
    return key in this.items;
  }

  // empties the dictionary
  clear(){
    this.items = {};
  }

  // searches for the key and returns the value for that key
  get(key){
    return this.has(key) ? this.items[key] : undefined ;
  }

  // removes an element from the dictionary
  delete(key){
    if(this.has(key)){
      delete this.items[key];
      return true;
    }
    return false;
  }
}

module.exports = Dictionary;