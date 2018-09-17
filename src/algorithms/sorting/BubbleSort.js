class BubbleSort{
  constructor(elements){
    this.elements = elements;
  }

  /* Algorithm: Compares every two adjacent items and swaps if the first is bigger than the second.
     1.loop from 0 to n
       1.2 loop from  0 to n-1
          1.2.1 compare two adjacent elements
                1.2.1.1 if first is greater than second, swap the two elements
     2. return the result
   */
  sort(){
    let length = this.elements.length;

    for(let i = 0; i < length; i++){                  //O(n)
      for(let j = 0; j < length - 1; j++){            //O(n - 1)
        if(this.elements[j] > this.elements[j+1]){
          let temp = this.elements[j];
          this.elements[j] = this.elements[j+1];
          this.elements[j+1] = temp;
        }
      }
    }
    return this.elements;
  }
}

module.exports = BubbleSort;

/* Calculating Time complexity:

  F(n) = O(n) * O(n - 1) * O(1)
       = O(n^2 - n) * O(1)
  Discarding everything other than the highest value.
  F(n) = O(n^2)
 */
