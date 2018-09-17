class QuickSort{
  /* Algorithm: Select a pivot point. Rearrange all elements that are greater than pivot to the right and less than pivot to the left.

    sort(array, low, high)
      1. let low be 0 and high be length of array.
      2. if low is less than high
        2.1 call method partition(array, low, high) and save the pivot index returned
        2.2 recursively call sort from low to pivotIndex - 1
        2.3 recursively call sort from pivotIndex + 1 to high
     3. for initial call return sorted array

    partition(array, low, high)
      1. choose a pivot. We are taking the last element in the array. i.e, high
      2. initialize pivotLocation to 0
      3. loop from low to high, lets call it index i
          3.1 if value at array[i] is less than or equal to pivot
              3.1.1 swap the value of pivotLocation and i in array
              3.1.2 increment pivotLocation
      4. swap the value of pivotLocation with the high value in the array
      5. return pivotLocation

    swap(array, iLeft, iRight)
      1. if iLeft is equal to iRight , nothing needs to be done, just return
      2. swap value at iLeft with value at iRight.
      3. return array
   */

  sort(elements, low, high){
    if(low === undefined){                                        //Constant O(1)
      low = 0;
    }

    if( high === undefined){
      high = elements.length - 1;
    }

    if(low < high){
      let pivotIndex = this.partition(elements, low, high);      //Complexity of partition O(n)

      this.sort(elements, low, pivotIndex - 1);                   // n/2
      this.sort(elements, pivotIndex + 1, high);
    }

    if((high - low) === (elements.length - 1)){
      return elements;
    }
  }

  partition(elements, low, high){
    let pivot = elements[high];
    let pivotLocation = low;

    for(let i = low; i < high; i++){                              //O(n)
      if(elements[i] <= pivot){
        this.swap(elements, pivotLocation, i);
        pivotLocation++;
      }
    }
    this.swap(elements, pivotLocation, high);
    return pivotLocation;
  }

  swap(array, iLeft, iRight){
    if(iLeft === iRight){
      return;
    }

    let temp = array[iLeft];
    array[iLeft] = array[iRight];
    array[iRight] = temp;

    return array;
  }
}

module.exports = QuickSort;

/* Time Complexity Calculations:
    Worst Case:
    F(n) = n + 2(n/2)
         = O(n*log(n))
 */