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

  /* size: returns the length of set
    1. initialize count.
    2. loop through each key in set
       2.1 increment count by 1
    3. return count
  */
  size(){
    let count = 0;

    for(let key in this.items){
      ++count;
    }
    return count;
  }

  /*values(): returns an array of values of the set.
    1. initialize an empty array.
    2. loop through the set
      2.1 push value of set to array
    3. return array
   */
  values(){
    let values = [];

    for(let key in this.items){
      values.push(this.items[key]);
    }

    return values;
  }

  //clear(): removes all elements from the set
  clear(){
    this.items = {};
  }

  /* delete(value): removes the value from the set
     1. check if set has the value that needs to be deleted.
       1.1 if yes, delete the value from the set
       1.2 return true
     2. return false, if the value was not found or the above condition failed.
   */
  delete(value){
    if(this.has(value)){
      delete this.items[value];
      return true;
    }
    return false;
  }

  /* union(): returns the new set object with all the elements of set A and set B
    1. create a new set - unionAB
    2. initialize new array values and store values of setA in it.
    3. loop through the array
      3.1 add the values of array to unionAB
    4. repeat steps 2, 3 for setB
    5. return unionAB
   */

  union(otherSet){
    let unionSet = new Set();

    let values = this.values();
    values.forEach((value) =>{
      unionSet.add(value);
    });

    values = otherSet.values();
    values.forEach((value) => {
      unionSet.add(value);
    });

    return unionSet;
  }

  /*intersection(otherSet): returns the common elements between two sets.
    1. create a new set intersectionSet.
    2. initialize values with the values of set A
    3. loop through values array
      3.1 check if setB has the value
          3.1.1 if it does, add it to the intersectionSet.
    4. return intersectionSet
   */
  intersection(otherSet){
    let intersectionSet = new Set();
    let values = this.values();

    values.forEach((value) =>{
      if(otherSet.has(value)){
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  /*difference(otherSet): returns the elements in setA which are not in setB.
    1. create differenceSet set
    2. initialize values array with values of setA
    3. loop through values array
      3.1 if setB does have value
          3.1.1 add the value to differenceSet
    4. return differenceSet
   */

  difference(otherSet){
    let differenceSet = new Set();
    let values = this.values();

    values.forEach((value) => {
      if(!otherSet.has(value)){
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  /* subset: returns true is one set is a subset of another set.
    1. check if the size of setA is greater than size of subsetB
        1.1 if true, return false
    2. else,
      2.1 initialize values array and store the values of setA
      2.2 loop through the values array
          2.2.1 check if otherSet does not have value
                2.2.1.1 if true, return false
    3. return true
   */

  subsetOf(otherSet){
    if(this.size() > otherSet.size()){
      return false;
    } else {
      let values = this.values();

      for(let i = 0; i < values.length; i++){
        if(!otherSet.has(values[i])){
          return false;
        }
      }
      return true;
    }
  }
}

module.exports = Set;