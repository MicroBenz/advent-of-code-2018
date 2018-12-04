const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

describe('Day 3 - No Matter How You Slice It', () => {
  describe('Part 1', () => {
    it(`
    #1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2
    should return 4
    `, () => {
      const res = solution.partOne(`#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`);
      expect(res).toEqual(4);
    })

    it(`
    #1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2
    #4 @ 5,5: 2x2
    should return 4
    `, () => {
      const res = solution.partOne(`#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
#3 @ 5,5: 2x2`);
      expect(res).toEqual(4);
    })

    it('Answer is 110827', () => {
      expect(solution.partOne(input)).toEqual(110827);
    })
  })

  describe('Part 2', () => {
    it(`
    #1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2
    should return 3
    `, () => {
      const res = solution.partTwo(`#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`);
      expect(res).toEqual(3);
    })

    it(`
    #1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2
    #4 @ 5,5: 2x2
    should return 4
    `, () => {
      const res = solution.partTwo(`#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
#3 @ 5,5: 2x2`);
      expect(res).toEqual(3);
    })

    it('Answer is 116', () => {
      expect(solution.partTwo(input)).toEqual(116);
    })
  });
});
