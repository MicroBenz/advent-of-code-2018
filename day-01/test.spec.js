const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

describe('Day 1 -  Chronal Calibration', () => {
  describe('Part 1', () => {
    it('+1, +1, +1 should return 3', () => {
      const res = solution.partOne(`+1
      +1
      +1`);
      expect(res).toEqual(3);
    });

    it('+1 +1 -2 should return 0', () => {
      const res = solution.partOne(`+1
      +1
      -2`);
      expect(res).toEqual(0);
    });

    it('-1 -2 -3 should return -6', () => {
      const res = solution.partOne(`-1
      -2
      -3`);
      expect(res).toEqual(-6);
    });

    it('Answer is 477', () => {
      expect(solution.partOne(input)).toEqual(477);
    });

  })
  describe('Part 2', () => {
    it('+1, -1 should return 0', () => {
      const res = solution.partTwo(`+1
      -1`);
      expect(res).toEqual(0);
    });
  
    it('+3, +3, +4, -2, -4 should return 10', () => {
      const res = solution.partTwo(`+3
      +3
      +4
      -2
      -4`);
      expect(res).toEqual(10);
    });
  
    it('-6, +3, +8, +5, -6 should return 5', () => {
      const res = solution.partTwo(`-6
      +3
      +8
      +5
      -6`);
      expect(res).toEqual(5);
    });
  
    it('+7, +7, -2, -7, -4 should return 14', () => {
      const res = solution.partTwo(`+7
      +7
      -2
      -7
      -4`);
      expect(res).toEqual(14);
    });
  
    it('Answer is 390', () => {
      expect(solution.partTwo(input)).toEqual(390);
    });
    
  })
});
