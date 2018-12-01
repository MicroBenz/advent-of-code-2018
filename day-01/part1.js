const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');
const result = input.reduce((res, current) => Number(current) + res, 0);
console.log(result);