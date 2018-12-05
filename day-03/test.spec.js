const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const sampleTestcase = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

describe('Day 3 - No Matter How You Slice It', () => {
  describe('Part 1', () => {
    it('Sample testcase should return 4', () => {
      expect(solution.partOne(sampleTestcase)).toEqual(4);
    });

    it('Answer is 110827', () => {
      expect(solution.partOne(input)).toEqual(110827);
    });
  });

  describe('Part 2', () => {
    it('Sample testcase should should return 3', () => {
      expect(solution.partTwo(sampleTestcase)).toEqual(3);
    });

    it('Answer is 116', () => {
      expect(solution.partTwo(input)).toEqual(116);
    });
  });
});
