/* Set: is a collection of items that are unordered and consists of unique elements.
   Null Set: A set with no element is called null set or empty set.
 */

class Set{
  constructor(){
    this.items = {};
  }

  has(value){
    return this.items.hasOwnProperty(value);
  }

  /* add: adds the value to the set
    1. check if the value is already present in the set.
       1.1 if no, add value to the set and return true
    2. return false
   */
  add(value){
    if(!this.has(value)){
      this.items[value] = value;
      return true;
    }
    return false;
  }
}

module.exports = Set;