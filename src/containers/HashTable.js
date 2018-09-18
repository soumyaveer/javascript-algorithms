class HashTable{
  constructor(){
    this.table = [];
  }

  /* hashCode: generates a number based on the sum of each char ASCII value that composes that key.
    1. initialize a variable to hold the sum of each char ASCII value. (hash)
    2. loop through each char of the key.
      2.1 sum each char ASCII value and store it in hash variable
    3. return hash variable

    Time Complexity : F(n) =  O(n), where n is the number of characters in the key.
   */
  hashCode(key){
    let hash = 0;

    for(let i = 0; i < key.length; i++){   //O(n)
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  /* set: adds a new item to the hash table
     1. find the position of the key to store value using hashCode method. Store it to position variable.
     2. store the value in that position.
   */
  set(key, value){
    let position = this.hashCode(key);
    this.table[position] = value;
  }
}

module.exports = HashTable;