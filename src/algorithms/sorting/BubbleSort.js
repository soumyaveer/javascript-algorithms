class BubbleSort{
  constructor(elements){
    this.elements = elements;
  }

  sort(){
    let length = this.elements.length;                //O(1)

    for(let i = 0; i < length; i++){                  //O(n)
      for(let j = 0; j < length - 1; j++){            //O(n - 1)
        if(this.elements[j] > this.elements[j+1]){    //O(1)
          let temp = this.elements[j];                //O(1)
          this.elements[j] = this.elements[j+1];      //O(1)
          this.elements[j+1] = temp;                  //O(1)
        }
      }
    }
    return this.elements;
  }
}

module.exports = BubbleSort;

/* Calculating Time complexity:

  F(n) = O(n) * O(n - 1) * O(1) + O(1) + O(1) + O(1) + O(1)
       = O(n^2 - n) * O(1)
  Discarding everything other than the highest value.
  F(n) = O(n^2)
 */
