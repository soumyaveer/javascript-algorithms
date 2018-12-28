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

     Time Complexity: F(n) = O(n).
     This is because set() is using hashCode method to calculate it’s position whose time complexity is O(n), which is the highest in set() method.
  */
  set(key, value){
    let position = this.hashCode(key);  //O(n)
    this.table[position] = value;
  }

  /* get: returns the value from the hash table using key
    1. get the position of the key using hashCode method
    2. return the value at that position.

    Time Complexity: F(n) = O(n).
    This is because get() is using hashCode method to calculate it’s position whose time complexity is O(n), which is the highest in get() method.
   */
  get(key){
    let position = this.hashCode(key); //O(n)
    return this.table[position];
  }

  /* remove: removes the value from the hash table using key
    1. get the position of the key using hasCode method and store it in position variable.
    2. remove the value at that position by overwriting it with undefined.

    Time Complexity: F(n) = O(n)
    This is because remove() is using hashCode method to calculate the position of the key. hashCode's time complexity is O(n), which is the highest in remove() method.
   */
  remove(key){
    let position = this.hashCode(key); //O(n)
    this.table[position] = undefined;
  }
}

module.exports = HashTable;