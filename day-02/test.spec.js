const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const sampleTestcase = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

const sampleTestcaseTwo = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

describe('Day 2 - Inventory Management System', () => {
  describe('Part 1', () => {
    it('Sample testcase should return 12', () => {
      expect(solution.partOne(sampleTestcase)).toEqual(12);
    })

    it('Answer is 9139', () => {
      expect(solution.partOne(input)).toEqual(9139);
    })
  })
  
  describe('Part 2', () => {
    it ('Sample testcase should return fgij', () => {
      expect(solution.partTwo(sampleTestcaseTwo)).toEqual('fgij');
    });

    it('Answer is uqcidadzwtnhsljvxyobmkfyr', () => {
      expect(solution.partTwo(input)).toEqual('uqcidadzwtnhsljvxyobmkfyr');
    })
  })
});
