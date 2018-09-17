class BinarySearch{
  constructor(elements){
    this.elements = elements;
  }

  /* Assumption: The array which is being searched is sorted
     Algorithm: Find the mid value in the sorted array. If low is less than mid value, search in left half on an array, otherwise we search the right of the array
     search(searchKey)
     1. initialize the low as 0. high as length - 1 and mid as (low + high)/2
     2. loop till low is less than or equal to high
        2.1 if array[mid] < searchKey
            2.1.1 change the value of low to mid + 1
        2.2 if array[mid] > searchKey
            2.2.1 change the value of high to mid - 1
        2.3 if(array[mid] is equal to searchKey
            2.3.1 return true
     3. return false
   */
}

module.exports = BinarySearch;