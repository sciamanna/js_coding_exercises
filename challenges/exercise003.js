function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length === 0) return nums;
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let str = words[0];
  if (words.length === 1) return str;
  for (let i = 1; i < words.length; i++) {
    let camel = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    str += camel;
  }
  return str;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count += people[i].subjects.length
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) return true;
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr3.includes(arr1[i])) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr3.push(arr1[i]);
          break;
        }
      }
    }
  }
  return arr3.sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
