class MergeSort{
  constructor(elements){
    this.elements = elements;
  }

  sort(){
    if(this.elements.length <= 1) {
      return this.elements;
    }

    let leftHalf = this.elements.slice(0, this.elements.length/2);
    let rightHalf = this.elements.slice(this.elements.length/2);
    let leftSorted = this.sort(leftHalf);
    let rightSorted = this.sort(rightHalf);

    return this.merge(leftSorted, rightSorted);
  }

  merge(left, right){
    let lPointer = 0;
    let rPointer = 0;
    let result = [];

    while(result.length < (left.length + right.length)){
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
  }
}

module.exports = MergeSort;