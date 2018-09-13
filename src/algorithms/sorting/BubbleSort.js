class BubbleSort{
  constructor(elements){
    this.elements = elements;
  }

  sort(){
    let length = this.elements.length;

    for(let i = 0; i < length; i++){
      for(let j = 0; j < length - 1; j++){
        if(this.elements[j] > this.elements[j+1]){
          let temp = this.elements[j];
          this.elements[j] = this.elements[j+1];
          this.elements[j+1] = temp;
        }
      }
    }

    return this.elements
  }
}

module.exports = BubbleSort;