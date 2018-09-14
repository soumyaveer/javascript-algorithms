class InsertionSort{
  constructor(elements){
    this.elements = elements;
  }

  /* Algorithm: Assume that first element is already sorted. Compare with second item and place it before first item if second item is smaller and after first item if second item is larger. and so on..
    1. loop from 0 to n (i)
      1.1 save the current value in temp
          1.2.1 Loop from i to 0
              1.2.1.1 if the value of previous elements is greater then temp (current value)
                    1.2.1.1.1 save previous value in the current value
          1.2.2 save the temp in the current value( swapping the current and the previous value)
     2. return the sorted list.
   */

  sort(){
    let length = this.elements.length;                //O(1)
    let temp, j;                                      //O(1)

    for(let i = 0; i < length; i++){                  //O(n)
      temp = this.elements[i];                        //O(1)
      j = i;                                          //O(1)
      while(j > 0 && this.elements[j - 1] > temp){    //O(n)
        this.elements[j] = this.elements[j-1];        //O(1)
        j--;                                          //O(1)
      }
      this.elements[j] = temp;                        //O(1)
    }
    return this.elements;
  }
}

module.exports = InsertionSort;

/* Time Complexity Calculation:
   Worst:
   F(n) = n * n * (1 + 1 + 1 + 1 + 1 + 1 + 1)
        = 7* n^2
        = O(n^2)
        (Discarding all the values except the highest)
 */