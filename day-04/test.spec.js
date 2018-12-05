const fs = require('fs');

const solution = require('./solution');

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const sampleTestcase = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`;

const sampleTestcaseWithReorder = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-01 00:55] wakes up
[1518-11-02 00:40] falls asleep
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:29] wakes up
[1518-11-04 00:36] falls asleep
[1518-11-03 00:24] falls asleep
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:46] wakes up
[1518-11-05 00:45] falls asleep
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:55] wakes up`;

describe('Day 4 - Repose Record', () => {
  describe('Part 1', () => {
    it('Sample testcase should return 240', () => {
      expect(solution.partOne(sampleTestcase)).toEqual(240);
    })

    it('Sample testcase should still return 240 even the order is not chronogical order', () => {
      expect(solution.partOne(sampleTestcaseWithReorder)).toEqual(240);
    })

    it('Answer is 19025', () => {
      expect(solution.partOne(input)).toEqual(19025);
    })
  })

  describe('Part 2', () => {
    it('Sample testcase should return 4455', () => {
      expect(solution.partTwo(sampleTestcase)).toEqual(4455);
    })

    it('Sample testcase should still return 4455 even the order is not chronogical order', () => {
      expect(solution.partTwo(sampleTestcaseWithReorder)).toEqual(4455);
    })

    it('Answer is 23776', () => {
      expect(solution.partTwo(input)).toEqual(23776);
    })

  });
});
