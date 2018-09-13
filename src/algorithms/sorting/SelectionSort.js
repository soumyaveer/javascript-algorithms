class SelectionSort{
  constructor(elements){
    this.elements = elements;
  }

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
