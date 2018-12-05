const inputParser = input => input.split('\n');

const transactionParser = row => {
  const date = new Date(row.slice(1, 17));
  const detail = row.slice(19);
  return { date, detail };
}

const getGuardId = transaction => transaction.detail.slice(7).split(' ')[0];

const sortByDate = (a, b) => {
  if (a.date > b.date) {
    return 1;
  } else if (a.date === b.date) {
    return 0;
  }
  return -1;
}

const range = (a, b) => [...Array(b - a).keys()].map(i => i + a);

const convertTransactionData = transactions => {
  const transactionByGuard = {};
  let currentGuardId = null;
  transactions.forEach(transaction => {
    if (['falls asleep', 'wakes up'].includes(transaction.detail)) {
      transactionByGuard[currentGuardId] = [
        ...transactionByGuard[currentGuardId],
        { date: transaction.date, status: transaction.detail === 'falls asleep' ? 'sleep' : 'awake' }
      ]
    } else {
      currentGuardId = getGuardId(transaction);
      if (!transactionByGuard[currentGuardId]) {
        transactionByGuard[currentGuardId] = [{
          date: transaction.date, status: 'awake',
        }];
      } else {
        transactionByGuard[currentGuardId] = [
          ...transactionByGuard[currentGuardId],
          { date: transaction.date, status: 'awake' }
        ];
      }
    }
  });
  return Object.keys(transactionByGuard)
    .map(guardId => ({
      guardId,
      transactions: transactionByGuard[guardId]
    }))
    .map(transactionData => {
      const guardTransactions = transactionData.transactions;
      const calculate = guardTransactions
        .reduce((prevResult, transaction) => {
          if (prevResult.status === 'awake' && transaction.status === 'sleep') {
            prevResult.beginSleepAt = transaction.date;
          } else if (prevResult.status === 'sleep' && transaction.status === 'awake') {
            const sleepMinutes = (transaction.date - prevResult.beginSleepAt) / 60000;
            const startSleepMinutes = prevResult.beginSleepAt.getMinutes();
            prevResult.sleepMinutes = [...prevResult.sleepMinutes, ...range(startSleepMinutes, startSleepMinutes + sleepMinutes)];
            prevResult.totalSleep += sleepMinutes;
          }
          prevResult.status = transaction.status;
          return prevResult;
        }, { status: 'awake', totalSleep: 0, sleepMinutes: [] });
      return { guardId: transactionData.guardId, totalSleep: calculate.totalSleep, sleepMinutes: calculate.sleepMinutes }
    })
    .map(transactionData => {
      const sleepFrequency = transactionData
        .sleepMinutes
        .reduce((prev, minute) => {
          if (!prev[minute]) {
            prev[minute] = 1;
          } else {
            prev[minute] += 1;
          }
          return prev;
        }, {});
      const maximumSleepAtMinute = Object.keys(sleepFrequency)
        .map(minute => ({ minute, count: sleepFrequency[minute] }))
        .sort((a, b) => {
          if (a.count > b.count) return -1;
          else if (a.count === b.count) return 0;
          return 1;
        })[0];
      return { ...transactionData, maximumSleepAtMinute: maximumSleepAtMinute || { minute: 0, count: 0 } }
    })
}

module.exports = {
  partOne: (input) => {
    const transactions = inputParser(input)
      .map(row => transactionParser(row))
      .sort(sortByDate)
    const processedTransactions = convertTransactionData(transactions);
    const maximunSleepBoy = processedTransactions
      .sort((a, b) => {
        if (a.totalSleep > b.totalSleep) return -1;
        else if (a.totalSleep === b.totalSleep) return 0;
        return 1;
      })[0];
    return Number(maximunSleepBoy.guardId) * Number(maximunSleepBoy.maximumSleepAtMinute.minute);
  },
  partTwo: (input) => {
    const transactions = inputParser(input)
      .map(row => transactionParser(row))
      .sort(sortByDate)
    const maximunSleepAtMinutesBoy = convertTransactionData(transactions)
      .sort((a, b) => {
        if (a.maximumSleepAtMinute.count > b.maximumSleepAtMinute.count) return -1;
        else if (a.maximumSleepAtMinute.count === b.maximumSleepAtMinute.count) return 0;
        return 1;
      })[0];
    return Number(maximunSleepAtMinutesBoy.guardId) * Number(maximunSleepAtMinutesBoy.maximumSleepAtMinute.minute);
  }
}
