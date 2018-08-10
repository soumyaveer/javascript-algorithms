'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {
  let h1HeightStack = [];
  let h2HeightStack = [];
  let h3HeightStack = [];
  let h1HeightSum = 0;
  let h2HeightSum = 0;
  let h3HeightSum = 0;
  let equalHeight = 0;

  
  for(let i = h1.length - 1; i >= 0; i--){
		console.log('loop 1');
    h1HeightSum += h1[i];
    h1HeightStack.push(h1HeightSum);
  }

  for(let j = h2.length - 1; j >= 0; j--){
		console.log('loop 2');
    h2HeightSum += h2[j]; 
    h2HeightStack.push(h2HeightSum);
  }
  
  for(let k = h3.length - 1; k >= 0; k--){
		console.log('loop 3');
    h3HeightSum += h3[k]; 
    h3HeightStack.push(h3HeightSum);
  }
  
  h1HeightStack.forEach((cumulativeHeight) => {
	 console.log('loop 4');
   if(h2HeightStack.includes(cumulativeHeight) && h3HeightStack.includes(cumulativeHeight)){
     equalHeight = cumulativeHeight;
    }
  });

  return equalHeight;
}

function main() {
    const ws = fs.createWriteStream("./answer.txt");

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);


    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
