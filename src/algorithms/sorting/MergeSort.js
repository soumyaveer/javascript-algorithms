class MergeSort{

  sort(elements){
    let length = elements.length;
    let mid = length/2;

    if(length <= 1) {
      return elements;
    }

    let leftHalf = elements.slice(0, mid);
    let rightHalf = elements.slice(mid);
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
    return result;
  }
}

module.exports = MergeSort;