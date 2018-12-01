const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n').map(row => Number(row));

let index = 0;
let duplicated = [0];
let sum = 0;
let isDuplicated = false;

while (true) {
  sum = input[index] + sum;
  isDuplicated = duplicated.includes(sum);
  if (isDuplicated) {
    console.log(sum);
    break;
  }
  duplicated.push(sum);
  index = (index + 1) % input.length;
}
