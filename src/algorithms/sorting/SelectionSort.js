class SelectionSort{
  constructor(elements){
    this.elements = elements;
  }

  /* Algorithm (in-place Selection sort): select the smallest element from the array and place it to the beginning of an array.
    1. loop from 0 to n-1 (i)
      1.1. assume that first element is the minimum value
      1.2 loop from i to n (j)
          1.2.1 compare the assumed smallest value to the current value
                1.2.1.1 if currentValue is smallest the save it as minIndex
       1.3 compare if the original assumed value is not equal to minimum value, that means that minimum value is the smallest value.
          1.2.1 swap original assumed min value and current min value
     2. return sorted list
   */

  sort(){
    let minIndex;
    let length = this.elements.length;                    //O(1)
    for(let i = 0; i < length - 1; i++){                  //O(n-1)
      minIndex = i;                                       //O(1)
      for(let j = i; j< length; j++){                     //O(n)
        if(this.elements[minIndex] > this.elements[j]){   //O(1)
          minIndex = j;                                   //O(1)
        }
      }

      if(i !== minIndex){                                 //O(1)
        let temp = this.elements[minIndex];               //O(1)
        this.elements[minIndex] = this.elements[i];       //O(1)
        this.elements[i] = temp;                          //O(1)
      }
    }

    return this.elements;
  }
}

module.exports = SelectionSort;

/* Calculating Time complexity:
  F(n) = O(n) * O(n - 1) * O(1) + O(1) + O(1) + O(1) + O(1) + O(1) + O(1) + O(1)
       = O(n^2 - n) * O(1)
  Discarding everything other than the highest value.
  F(n) = O(n^2)
 */
