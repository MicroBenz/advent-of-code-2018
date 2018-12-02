const inputParser = input => input.split('\n');

module.exports = {
  partOne: (input) => {
    input = inputParser(input);
    const process = input
      .map(row => {
        const count = { 2: 0, 3: 0 };
        // const charCount = {};
        const countChar = [...row].reduce(
          (ans, char) => {
            if (!ans[char]) {
              ans[char] = 1;
            } else {
              ans[char] += 1;
            }
            return ans;
          },
          {}
        )
        Object.keys(countChar).forEach(char => {
          if (countChar[char] === 2) {
            count[2] += 1;
          }
          if (countChar[char] === 3) {
            count[3] += 1;
          }
        })
        return count;
      });
    const answer = process
      .reduce((ans, row) => {
        if (row[2] !== 0) {
          ans[0] += 1;
        }
        if (row[3] !== 0) {
          ans[1] += 1;
        }
        return ans;
      }, [0, 0]);
    return answer[0] * answer[1];
  },
  partTwo: (input) => {
    input = inputParser(input);
    const matchStrArr = [];
    for (let i = 0; i < input.length ; i += 1) {
      for (let j = i + 1; j < input.length; j += 1) {
        // console.log(input[i], input[j]);
        let matchStr = '';
        for (let k = 0; k < input[i].length; k += 1) {
          if (input[i].charAt(k) === input[j].charAt(k)) {
            matchStr += input[i].charAt(k);
          }
        }
        matchStrArr.push(matchStr);
      }
    }
    let max = 0;
    const longestStr = matchStrArr.reduce((ans, str) => {
      if (str.length > ans.length) return str;
      return ans;
    }, '');
    return longestStr;
  }
}