class Dictionary{

  constructor(){
    this.items = {};
  }

  // returns the size of Dictionary
  size(){
    let size = 0;
    let key;

    for(key in this.items){
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

  keys(){
    let keys = [];
    let key;

    for(key in this.items) {
      keys.push(key);
    }

    return keys;
  }
}

module.exports = Dictionary;