class SelectionSort{
  constructor(elements){
    this.elements = elements;
  }

  sort(){
    let minIndex;
    let length = this.elements.length;
    for(let i = 0; i < length - 1; i++){
      minIndex = i;
      for(let j = i; j< length; j++){
        if(this.elements[minIndex] > this.elements[j]){
          minIndex = j;
        }
      }

      if(i !== minIndex){
        let temp = this.elements[minIndex];
        this.elements[minIndex] = this.elements[i];
        this.elements[i] = temp;
      }
    }

    return this.elements;
  }
}

module.exports = SelectionSort;