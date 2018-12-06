const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const sampleTestcase = `dabAcCaCBAcCcaDA`;

describe('Day 5 - Alchemical Reduction', () => {
  describe('Part 1', () => {
    it('Sample testcase should return 10', () => {
      expect(solution.partOne(sampleTestcase)).toEqual(10);
    });

    it('Answer is 11364', () => {
      expect(solution.partOne(input)).toEqual(11364);
    });
  })

  describe('Part 2', () => {
    it('Sample testcase should return 4', () => {
      expect(solution.partTwo(sampleTestcase)).toEqual(4);
    });

    it('Answer is 4212', () => {
      expect(solution.partTwo(input)).toEqual(4212);
    })

  });
});
