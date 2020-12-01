function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(function (num) {
    if (num < 1) {
      return true;
    } else {
      return false;
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const newNames = names.filter(function (name) {
    if (name.startsWith(char)) {
      return true;
    } else {
      return false;
    }
  });
  return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = words.filter(function (word) {
    if (word.startsWith('to ')) {
      return true;
    } else {
      return false;
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const ints = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return true;
    } else {
      return false;
    }
  });
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  users.forEach(user => {
    const city = user.data.city.displayName;
    cities.push(city);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqRoots = [];
  nums.forEach(num => {
    const root = Math.sqrt(num);
    const sqRoot = Math.round(root * 100 + Number.EPSILON) / 100;
    sqRoots.push(sqRoot);
  });
  return sqRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
    const newSentences = sentences.filter(function (sentence) {
      const lSentence = sentence.toLowerCase();
      const lStr = str.toLowerCase();
      if (lSentence.includes(lStr)) {
        return true;
      } else {
        return false;
      }
    });
    return newSentences;    
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
    const lsides = [];
    triangles.forEach(triangle => {
    const lSide = Math.max(...triangle);
    lsides.push(lSide);
  });
  return lsides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
