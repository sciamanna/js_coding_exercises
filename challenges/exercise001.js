function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substr(0,1).toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substr(0,1)+"."+lastName.substr(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
 // return (originalPrice += originalPrice*vatRate/100).toFixed(2);
 let num = originalPrice += originalPrice*vatRate/100;
 return Math.round( num * 100 + Number.EPSILON ) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let num = originalPrice - (originalPrice * reduction / 100)
  return Math.round( num * 100 + Number.EPSILON ) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let rem = str.length % 2;
  let pos = parseInt(str.length / 2);
  if (rem > 0){
    return str[pos];
  }
  return str[pos-1] + str [pos]
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let rev = "";
  for (let i = word.length-1; i>=0; i--){
    rev += word[i];
  }
  return rev;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  for (let i = 0; i < words.length; i++){
    words[i] = reverseWord( words[i] );
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let i = 0; i < users.length; i++){
    if (users[i].type === "Linux" ){
      count++
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  for (let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  let num =  sum / scores.length;
  return Math.round( num * 100 + Number.EPSILON ) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
    if (n % 3 === 0 && n % 5 ===0) return 'fizzbuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'buzz';
    else return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
