/* Set: is a collection of items that are unordered and consists of unique elements.
   Null Set: A set with no element is called null set or empty set.
 */

class Set{
  constructor(){
    this.items = {};
  }

  has(value){
    return value in this.items;
  }
}

module.exports = Set;