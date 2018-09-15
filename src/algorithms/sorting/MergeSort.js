class MergeSort{

  /* Algorithm: Divide the array to smallest parts, keep sorting and merging them together.
     1. mergeSort(list)
        1.1 initialize n to the length of the list
        1.2 base case: if n is less than 2, return
        1.3 find mid of the list (n/2)
        1.4 assign left array from beginning to mid
        1.5 assign right array from, mid to end of the array(length)
        1.5 call mergeSort(left) recursively for left array
        1.6 call mergeSort(right) recursively for right array
        1.7 merge left and right arrays (merge(left, right)

     2. merge(left, right)
        2.1 initialize an empty results array, left pointer and right pointer. Let leftPointer be 0 and right pointer be 0.
        2.2 Loop while the length of result array is less than length of left and right array combined
            2.2.1 check if leftPointer is at the end of left array.
                  2.2.1.1 If it is then concatenate rest of the right array to the left array
            2.2.2 check if the right pointer is at the end of right array.
                  2.2.2.1 if it is, then concatenate rest of the left array at the end of right array.
            2.2.3 check if the value at left pointer is less than value of right pinter.
                  2.2.3.1 if it is, then push the value of left pointer to the result
            2.2.4 check if the value of right pointer is less than left pointer.
                  2.2.4.1 if it is, then push the value of right pointer to the result.
        2.3 return the result.
   */


  sort(elements){
    let length = elements.length;                                 //O(1)
    let mid = length/2;                                           //O(1

    if(length <= 1) {                                             //O(1)
      return elements;
    }

    let leftHalf = elements.slice(0, mid);
    let rightHalf = elements.slice(mid);
    let leftSorted = this.sort(leftHalf);                         //O(n/2)
    let rightSorted = this.sort(rightHalf);

    return this.merge(leftSorted, rightSorted);                   //O(n)
  }

  merge(left, right){
    let lPointer = 0;
    let rPointer = 0;
    let result = [];

    while(result.length < (left.length + right.length)){          //O(n)
      if(lPointer === left.length){
        result = result.concat(right.slice(rPointer));
      } else if(rPointer === right.length){
        result = result.concat(left.slice(lPointer));
      } else if(left[lPointer] <= right[rPointer]){
        result.push(left[lPointer++]);
      } else {
        result.push(right[rPointer++]);
      }
    }
    return result;
  }
}

module.exports = MergeSort;

/* Time Complexity Calculations:
    Worst Case:
    F(n) = n + 2(n/2)
         = O(n*log(n))
 */