const removeAllDuplicate = str => {
  let shouldBreak = false;
  while (!shouldBreak) {
    let strIndex = 0;
    shouldBreak = true;
    while (strIndex < str.length && strIndex + 1 < str.length) {
      if (
        str.charAt(strIndex).toLowerCase() === str.charAt(strIndex + 1).toLowerCase()
        && str.charAt(strIndex) !== str.charAt(strIndex + 1)
      ) {
        str = `${str.substr(0, strIndex)}${str.substr(strIndex + 2)}`
        shouldBreak = false;
        break;
      }
      strIndex += 1;
    }
  }
  return str;
}

const getAllUniqueChars = str => [...str]
  .reduce((result, char) => {
    if (!result.includes(char.toLowerCase())) {
      return [...result, char.toLowerCase()];
    }
    return result;
  }, []);

module.exports = {
  partOne: (input) => {
    const reactedStr = removeAllDuplicate(input);
    return reactedStr.length;
  },
  partTwo: (input) => {
    const allUniqueChars = getAllUniqueChars(input);
    const allPossibleStr = allUniqueChars
      .map(char => {
        const replacedStr = input.split(char).join('').split(char.toUpperCase()).join('');
        return removeAllDuplicate(replacedStr);
      })
      .sort((a, b) => a.length - b.length);
    return allPossibleStr[0].length;
  }
}
