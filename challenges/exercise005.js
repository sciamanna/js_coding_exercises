const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n && nums[i + 1] != undefined) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = { 1: 0, 0: 0 };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char] += 1;
    }
  }
  return frequencies;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const reversedNum = parseInt(n.toString().split('').reverse().join(''));
  return reversedNum;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (var i = 0; i < arrs.length; i++) {
    for (var j = 0; j < arrs[i].length; j++) {
      sum += arrs[i][j];
    }
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  }
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let key in haystack) {
    const value = haystack[key].toString();
    let lValue = value.toLowerCase();
    const lSearchTerm = searchTerm.toLowerCase();
    if (lValue.includes(lSearchTerm)) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.length === 0) {
    return {};
  }
  let output = {};
  let strArr = str.split(" ")
  for (let i = 0; i < strArr.length; i++) {
    let lWord = strArr[i].toLowerCase();
    let word = lWord.replace(/[^\w\s]/gi, '')
    if (output[word] === undefined) {
      output[word] = 1;
    } else {
      output[word] += 1;
    }
  }
  return output;
};
module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
