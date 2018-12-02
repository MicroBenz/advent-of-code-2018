const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

describe('Day 1 -  Chronal Calibration', () => {
  describe('Part 1', () => {
    it(`
    abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    abcdee
    ababab
    should return 12
    `, () => {
      const res = solution.partOne(`abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`);
      expect(res).toEqual(12);
    })

    it('Answer is 9139', () => {
      expect(solution.partOne(input)).toEqual(9139);
    })
  })
  
  describe('Part 2', () => {
    it (`
    abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz
    should return fgij
    `, () => {
      const res = solution.partTwo(`abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`);
      expect(res).toEqual('fgij');
    });

    it('Answer is uqcidadzwtnhsljvxyobmkfyr', () => {
      expect(solution.partTwo(input)).toEqual('uqcidadzwtnhsljvxyobmkfyr');
    })
  })
});
