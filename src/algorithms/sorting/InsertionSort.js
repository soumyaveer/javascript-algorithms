class InsertionSort{
  constructor(elements){
    this.elements = elements;
  }

  sort(){
    let length = this.elements.length;
    let temp, j;

    for(let i = 0; i < length; i++){
      temp = this.elements[i];
      j = i;
      while(j > 0 && this.elements[j - 1] > temp){
        this.elements[j] = this.elements[j-1];
        j--;
      }
      this.elements[j] = temp;
    }
    return this.elements;
  }
}

module.exports = InsertionSort;