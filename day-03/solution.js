const inputParser = input => input.split('\n');

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const transactionParser = row => {
  const firstWave = row.split(' @ ');
  const secondWave = firstWave[1].split(': ');
  const firstCoor = secondWave[0].split(',').map(n => Number(n));
  const size = secondWave[1].split('x').map(n => Number(n));
  return {
    id: Number(firstWave[0].slice(1)),
    coor: {
      x: firstCoor[0],
      y: firstCoor[1]
    },
    size: { x: size[0], y: size[1] }
  }
}

const calculateMap = transactions => {
  const map = [];
  transactions.forEach((transaction) => {
    // console.log(transaction);
    for (let x = transaction.coor.x; x < transaction.coor.x + transaction.size.x; x += 1) {
      for (let y = transaction.coor.y; y < transaction.coor.y + transaction.size.y; y += 1) {
        if (!map[y]) {
          map[y] = [];
          map[y][x] = transaction.id;
        } else {
          if (!map[y][x]) {
            map[y][x] = transaction.id;
          } else if (map[y][x] !== transaction.id) { // Someone claim this, set to X
            map[y][x] = 'X';
          }
        }
      }
    }
  });
  return map;
}

module.exports = {
  partOne: (input) => {
    const transactions = inputParser(input).map(row => transactionParser(row));
    const map = calculateMap(transactions);
    let count = 0;
    for (let x = 0; x < map.length; x += 1) {
      if (map[x]) {
        for (let y = 0; y < map[x].length; y += 1) {
          if (map[x][y] === 'X') {
            count += 1;
          }
        }
      }
    }
    return count;
  },
  partTwo: (input) => {
    const transactions = inputParser(input).map(row => transactionParser(row));
    const map = calculateMap(transactions);
    let res = '';
    transactions.some((transaction) => {
      // console.log(transaction);
      for (let x = transaction.coor.x; x < transaction.coor.x + transaction.size.x; x += 1) {
        for (let y = transaction.coor.y; y < transaction.coor.y + transaction.size.y; y += 1) {
          if (map[y][x] !== transaction.id) {
            return false;
          }
        }
      }
      res = transaction.id;
      return true;
    });
    return res;
  }
}