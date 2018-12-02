const inputParser = text => text.split('\n').map(n => Number(n)); 

module.exports = {
  partOne: (input) => {
    return inputParser(input)
      .reduce((res, current) => current + res, 0);
  },
  partTwo: (input) => {
    const parsedInput = inputParser(input);
    let index = 0;
    let duplicated = [0];
    let sum = 0;
    let isDuplicated = false;
    while (true) {
      sum = parsedInput[index] + sum;
      isDuplicated = duplicated.includes(sum);
      if (isDuplicated) {
        break;
      }
      duplicated.push(sum);
      index = (index + 1) % parsedInput.length;
    }
    return sum;
  }
}
