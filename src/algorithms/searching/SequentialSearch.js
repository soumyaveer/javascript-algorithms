class SequentialSearch{
  constructor(elements){
    this.elements = elements;
  }

  /* Algorithm: Loop through each element in an array, if element searched is found return true otherwise return false.
     search(searchKey)
     1. loop from 0 to n, n being the length of the array
        1.1 if any element in array equals searchKey
            1.1.1 return true
     2. return false
   */

  search(searchKey){
    let length = this.elements.length;

    for(let i = 0; i < length; i++){       //O(n)
      if(this.elements[i] === searchKey){
        return true;
      }
    }
    return false;
  }
}

module.exports = SequentialSearch;

/* Time Complexity: Worst case
    F(n) = O(n)
 */